import { format, formatDistanceToNow } from 'date-fns';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export const capitalizeAll = (value) => {
  return value && value.length > 0 ? value.toUpperCase() : value;
};

export const capitalizeFirst = (value) => {
  return value && value.length >= 0 ? value[0].toUpperCase() + value.slice(1).toLowerCase() : value;
};

export const capitalizeFirstSplit = (value, s, j) => {
  return value && value.length > 0
    ? value
      .split(s)
      .map((word) => capitalizeFirst(word))
      .join(j)
    : value;
};

export const currencyConversion = (amount) => {
  return amount && amount > 0 ? `${parseInt(amount, 10).toLocaleString('en-IN')}` : amount;
};

export const dateConversion = (date, dateFormat) => {
  return date && date.length > 0 ? format(new Date(date), dateFormat) : date;
};

export const dateDistanceConversion = (date) => {
  return date && date.length > 0 ? formatDistanceToNow(new Date(date), { includeSeconds: true }) : date;
};

export const cloneItems = (value, times) => {
  let array = [];
  for (let i = 0; i < times; i++) array.push(value);

  return array;
};


export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export const getAmountInHindi = (num) => {

  var a = [
    '',
    'एक',
    'दो',
    'तीन',
    'चार',
    'पाँच',
    'छह',
    'सात',
    'आठ',
    'नौ',
    'दस',
    'ग्यारह',
    'बारह',
    'तेरह',
    'चौदह',
    'पन्द्रह',
    'सोलह',
    'सत्रह',
    'अठारह',
    'उन्नीस',
    'बीस',
    'इक्कीस',
    'बाईस',
    'तेईस',
    'चौबीस',
    'पच्चीस',
    'छब्बीस',
    'सत्ताईस',
    'अट्ठाईस',
    'उनतीस',
    'तीस',
    'इकतीस',
    'बत्तीस',
    'तैंतीस',
    'चौंतीस',
    'पैंतीस',
    'छत्तीस',
    'सैंतीस',
    'अड़तीस',
    'उनतालीस',
    'चालीस',
    'इकतालीस',
    'बयालीस',
    'तैंतालीस',
    'चौवालीस',
    'पैंतालीस',
    'छियालीस',
    'सैंतालीस',
    'अड़तालीस',
    'उनचास',
    'पचास',
    'इक्यावन',
    'बावन',
    'तिरेपन',
    'चौवन',
    'पचपन',
    'छप्पन',
    'सत्तावन',
    'अट्ठावन',
    'उनसठ',
    'साठ',
    'इकसठ',
    'बासठ',
    'तिरेसठ',
    'चौंसठ',
    'पैंसठ',
    'छियासठ',
    'सड़सठ',
    'अड़सठ',
    'उनहत्तर',
    'सत्तर',
    'इकहत्तर',
    'बहत्तर',
    'तिहत्तर',
    'चौहत्तर',
    'पचहत्तर',
    'छिहत्तर',
    'सतहत्तर',
    'अठहत्तर',
    'उनासी',
    'अस्सी',
    'इक्यासी',
    'बयासी',
    'तिरासी',
    'चौरासी',
    'पचासी',
    'छियासी',
    'सत्तासी',
    'अट्ठासी',
    'नवासी',
    'नब्बे',
    'इक्यानबे',
    'बानबे',
    'तिरानबे',
    'चौरानबे',
    'पंचानबे',
    'छियानबे',
    'सत्तानबे',
    'अट्ठानबे',
    'निन्यानबे',
  ];
  var b = ['', '', 'सौ', 'हजार', 'लाख', 'करोड़', 'अरब', 'खरब', 'नील'];
  if ((num = num.toString()).length > 9) return 'overflow';
  let n = [];
  n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = '';
  str += n[1] != 0 ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + ' करोड़ ' : '';
  str += n[2] != 0 ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + ' लाख ' : '';
  str += n[3] != 0 ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + ' हजार ' : '';
  str += n[4] != 0 ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + ' सौ ' : '';
  str += n[5] != 0 ? (str != '' ? '' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
  return str;
};



export const Main = (data, dept) => {

  function AuditCanAction1() {
    if (
      data?.deptWorkingStatus?.AUDIT_WORKING &&
      data?.auditStatus === 'suggested_edit'
    ) {
      return true;
    } else if (
      data?.deptWorkingStatus?.AUDIT_WORKING === false &&
      data?.auditStatus === 'pending'
    ) {
      return false;
    } else {
      return false;
    }
  }

  function LegalCanAction1() {
    if (
      data?.deptWorkingStatus?.LEGAL_WORKING &&
      data?.legalStatus === 'suggested_edit'
    ) {
      return true;
    } else if (
      data?.deptWorkingStatus?.LEGAL_WORKING === false &&
      data?.auditStatus === 'pending'
    ) {
      return false;
    } else {

      return false;
    }
  }
  function TechnicalCanAction1() {
    if (
      data?.deptWorkingStatus?.TECHNICAL_WORKING &&
      data?.technicalStatus === 'suggested_edit'
    ) {
      return true;
    } else if (
      data?.deptWorkingStatus?.TECHNICAL_WORKING === false &&
      data?.technicalStatus === 'pending'
    ) {
      return false;
    } else {
      return false;
    }
  }

  function RCUCanAction1() {
    if (
      data?.deptWorkingStatus?.RCU_WORKING &&
      data?.rcuStatus === 'suggested_edit'
    ) {
      return true;
    } else if (
      data?.deptWorkingStatus?.RCU_WORKING === false &&
      data?.rcuStatus === 'pending'
    ) {
      return false;
    } else {
      return false;
    }
  }
  const AuditCanAction = AuditCanAction1();
  const rcuCanAction = RCUCanAction1();
  const LegalCanAction = LegalCanAction1();
  const technicalCanAction = TechnicalCanAction1();

  return dept === "audit" ? AuditCanAction :
    dept === "legal_and_technical" ? LegalCanAction :
      dept === "rcu" ? rcuCanAction :
        dept === "technical" ? technicalCanAction : ''
}

export const downloadImage = e => {
  fetch(e.target.href, {
    method: "GET",
    headers: {}
  })
    .then(response => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.png"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch(err => {
    });
};
export const OpsLegal = (fileStage, legalAssigned, opsAssigned, legalDepartmentAssigned, opsDepartmentAssigned, legalStatus, opsStatus) => {

  return (
    <>
      {
        (fileStage === "rcu_working" ||
          fileStage === "file_sent_for_correction" ||
          fileStage === "audit_working" ||
          fileStage === "operation_and_legal_working") ?

          (legalAssigned === null ? " Legal Not Assigned" : legalDepartmentAssigned === null ? " Legal department Not Assigned" : legalStatus)
            (opsAssigned === null ? "Operation Not Assigned" : opsDepartmentAssigned === null ? " Operation department Not Assigned" : opsStatus) : fileStage
      }
    </>
  )


}


export const currencyMask = (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, '');
  // value =value.replace(/(\d)(\d{2})$/,"$1 . $2");
  value = value.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
  // value =value.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ',');

  e.target.value = value;
  return e;
};