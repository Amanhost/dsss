import React from 'react';
import ReactDOM from 'react-dom';
import './TimeLine.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { dateConversion } from '../../utils/HelperFunctions';
import timelineElements from './TimeLineElement';
import { date } from 'yup';

const TimeLine = (timelineElements) => {
 
  return (
    <div style={{ transition: '3s' }} className="App">
      {/* <h1>TimeLine</h1> */}
      <div
        style={{
          background: '#fbf4f7',
          fontFamily: 'Trebuchet Ms',
        }}
      >
        <VerticalTimeline>
          {timelineElements?.timelineElements?.map((event, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date={event.date}
              icon={
                // <Icon className="mr-8" color="action">
                //   help_outline
                // </Icon>
                <div>
                  <div style={{ flex: 'wrap', marginTop: '20px', padding: '5px' }} align="center">
                    {event.applicationStage === 'legal_department_assigned'
                      ? 'Legal Department':
                      event.applicationStage === 'operation_department_assigned'
                      ? 'Operation Department'
                      : event.applicationStage === 'legal_and_technical'
                      ? 'Legal'
                      : event.applicationStage === 'operation'
                      ? 'Operation'
                      : event.applicationStage === 'rcu'
                      ? 'RCU'
                      : event.applicationStage === 'od_calling'
                      ? 'OD Calling'
                      : event.applicationStage === 'Sent file to HO'
                      ? 'File Sent by Credit Manager'
                      : event.applicationStage === 'sent_file_to_ho'
                      ? 'File Sent by Credit Manager'
                      : event.applicationStage === 'file_received_to_ho'
                      ? 'File received to HO'
                      : event.applicationStage === 'file_sent_for_correction'
                      ? 'File Sent For Correction'
                      : event.applicationStage === 'operation_and_legal_working'
                      ? 'Operation and Legal are working'
                      : event.applicationStage === 'payment_done'
                      ? 'Payment Done'
                      : event.applicationStage}
                  </div>
                </div>
              }
              iconStyle={{
                border: '2px solid black',
                background: ' #b86885',
                color: ' #fff',
                width: '90px',
                height: '90px',
                marginLeft: '-45px',

                // justifyContent:"center"
                // marginRight:"1px"
              }}
            >
              <div className="d-flex justify-content-between">
                <strong> Date Assigned </strong>{' '}
                <h6
                  className="vertical-timeline-element-title"
                  dangerouslySetInnerHTML={{
                    __html: event.dateArrived ? dateConversion(event.dateArrived, 'dd-MM-yyyy hh : mm a') : 'NA',
                  }}
                />
              </div>
              <div className="d-flex justify-content-between">
                <strong> Date Modified</strong>{' '}
                <h6
                  className="vertical-timeline-element-title"
                  dangerouslySetInnerHTML={{
                    __html: event.approveDate ? dateConversion(event.approveDate, 'dd-MM-yyyy hh : mm a') : 'NA',
                  }}
                />
              </div>

              <div className="d-flex justify-content-between">
                <strong> Assigned To </strong>{' '}
                <h6
                  className="vertical-timeline-element-title"
                  dangerouslySetInnerHTML={{ __html: event.userName ? event.userName : 'NA' }}
                />
              </div>
              <div className="d-flex justify-content-between">
                <strong> Assigned By </strong>{' '}
                <h6
                  className="vertical-timeline-element-title"
                  dangerouslySetInnerHTML={{ __html: event.userNameBy ? event.userNameBy : 'NA' }}
                />
              </div>
              <div className="d-flex justify-content-between">
                <strong> TAT </strong>{' '}
                <h6
                  className="vertical-timeline-element-title"
                  style={{ color: 'red' }}
                  dangerouslySetInnerHTML={{ __html: event.tat ? event.tat : 'NA' }}
                />
              </div>
              <div className="d-flex justify-content-between">
                <strong> Status </strong>{' '}
                <h6
                  className="vertical-timeline-element-title"
                  style={{ color: 'green' }}
                  dangerouslySetInnerHTML={{
                    __html:
                      event.stageStatus === 'approved'
                        ? 'Approved'
                        : event.stageStatus === 'pending'
                        ? 'Pending'
                        : event.stageStatus === 'legal_and_technical WIP'
                        ? 'Legal WIP'
                        : event.stageStatus,
                  }}
                />{' '}
              </div>
              <div className="d-flex justify-content-between">
                <strong> Approvers Remark: </strong>{' '}
                <h6
                  className="vertical-timeline-element-title"
                  dangerouslySetInnerHTML={{ __html: event?.remark?event?.remark: 'NA' }}
                />
              </div>

              {/* {event.event} */}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default TimeLine;

// import './TimeLine.css';
// // import { ReactComponent as WorkIcon } from '../../assets/images/work.svg';
// // import { ReactComponent as SchoolIcon } from '../../assets/images/school.svg';
// import timelineElements from './TimelineElements';

// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

// import 'react-vertical-timeline-component/style.min.css';

// const Timeline = () => {
//   //   let workIconStyles = { background: '#06D6A0' };
//   //   let schoolIconStyles = { background: '#f9c74f' };
//   //   let borderStyles = { border: '1px solid #000' };

//   return (
//     <div className="Timeline-container" style={{ height: '300px', width: '50%' }}>
//       <h1 className="title">Timeline</h1>
//       <VerticalTimeline>
//         {timelineElements.map((element) => {
//           let isWorkIcon = element.icon === 'work';
//           let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== '';

//           return (
//             <VerticalTimelineElement
//               key={element.key}
//               date={element.date}
//               dateClassName="date"
//               // iconStyle={borderStyles}
//               // // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
//             >
//               <h3 className="vertical-timeline-element-title" style={{ fontSize: '15px' }}>
//                 {element.title}
//               </h3>
//               <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
//               <p id="description">{element.description}</p>
//             </VerticalTimelineElement>
//           );
//         })}
//       </VerticalTimeline>
//     </div>
//   );
// };

// export default Timeline;
