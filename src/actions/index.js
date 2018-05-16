import constants from './../constants/firebaseConfig';
const firebaseConfig = constants;
import Firebase from 'firebase';

Firebase.initializeApp(firebaseConfig);
const inquiries = Firebase.database().ref('inquiries');

export function addInquiry(_name, _email, _phone, _question){
  return () => inquiries.push({
    name: _name,
    email: _email,
    phone: _phone,
    question: _question
  });
}

export function watchFirebaseInquiriesRef(){
  return function(dispatch){
    inquiries.on('child_added', data => {
      const newInquiry = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveInquiry(newInquiry));
    });
  };
}

function receiveInquiry(firebaseInquiry){
  return {
    type: 'RECEIVE_INQUIRY',
    inquiry: firebaseInquiry
  };
}
