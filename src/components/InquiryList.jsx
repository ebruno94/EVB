import React from 'react';
import PropTypes from 'prop-types';
import Inquiry from './Inquiry';

export default function InquiryList(props){
  return(
    <div>
      <h1>Inquiries</h1>
      <hr/>
      {Object.keys(props.inquiryList).map(function(inquiryId){
        let inquiry = props.inquiryList[inquiryId];
        return <Inquiry
          name={inquiry.name}
          phone={inquiry.phone}
          email={inquiry.email}
          question={inquiry.question}
          key={inquiryId}
          inquiryId={inquiryId} />;
      })}
    </div>
  );
}

InquiryList.propTypes = {
  inquiryList: PropTypes.object
};
