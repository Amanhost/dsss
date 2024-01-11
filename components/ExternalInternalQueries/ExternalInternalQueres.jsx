import { useEffect, useState } from "react";
import { useAllobservationbydept } from "../../hooks/useQueryHooks/useAllobservationbydept";
import { observationtableColumns, observationtableColumnsViewAccess } from "../../pages/ApplicationById/CustomersDetails/dataArray";
import AckModal from "../DialogBox/AckMoadal";
import AllObservationTable from '../../pages/ApplicationById/CustomersDetails/AllObservationTable';
import { cloneItems } from "../../utils/HelperFunctions";
import { DataNotFound } from "../ErrorMessage/ErrorMessage";

const ExternalInternalQueries=({applicationNo,department})=>{
    const [dialogOpen,setDialogOpen]=useState(false);
    const { data: allobservationdept,status:obserbationStatus, refetch: allqueryRefetch } = useAllobservationbydept(applicationNo, department)
    useEffect(()=>{
        setDialogOpen( localStorage.getItem('ClickedTab')==="view_access"&&true);
    },[applicationNo])

    const closeobservationlist=()=>{
        setDialogOpen(false);
    }
    // console.log("value",allobservationdept?.data.filter((a)=>a.replyDate === null||a.replyDate === undefined));

    return(
        <>
         <AckModal
            size="xl"

            dialogOpen={dialogOpen}
            setDialogOpen={setDialogOpen}
            title="File is hold due to Mentioned queries"
            cancelButtonName="Close"
            handleClose={closeobservationlist}


            children={
              <>
                <div >
                {obserbationStatus==="success"&&

                 ( <><AllObservationTable
                    observationtableColumns={observationtableColumnsViewAccess(allqueryRefetch)}
                    tableData={allobservationdept?.data.filter((a)=>a.replyDate === null||a.replyDate === undefined)}
                    
                 
                  />
                  {(allobservationdept?.datalength === 0 
                    )&& <DataNotFound message={"No Query..."} />}
                  </>
                  )}
                  
                  {

                  obserbationStatus==="loading"&&

                 ( <AllObservationTable
                    observationtableColumns={observationtableColumnsViewAccess(allqueryRefetch)}
                    tableData={cloneItems(7,7)}
                    
                  />)

                } 
                {

obserbationStatus==="error"&&

( <AllObservationTable
  observationtableColumns={observationtableColumnsViewAccess(allqueryRefetch)}
  tableData={[]}
  
/>)

}
                </div>
              </>
            }

          ></AckModal>
        
        </>
    )

}
export default ExternalInternalQueries;