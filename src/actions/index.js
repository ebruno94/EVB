import constants from './../constants/firebaseConfig';
const firebaseConfig = constants;
import Firebase from 'firebase';

Firebase.initializeApp(firebaseConfig);
const inquiries = Firebase.database().ref('inquiries');
const items = Firebase.database().ref('items');

export function addInquiry(_name, _email, _phone, _question){
  return () => inquiries.push({
    name: _name,
    email: _email,
    phone: _phone,
    question: _question
  });
}

export function removeInquiry(key){
  return () => inquiries.child(key).remove();
}

export function watchFirebaseInquiriesRef(){
  return function(dispatch){
    inquiries.on('child_added', data => {
      const newInquiry = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveInquiry(newInquiry));
    });
    inquiries.on('child_removed', data =>{
      const inquiryToBeDeleted = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(deleteInquiry(inquiryToBeDeleted));
    });

  };
}

export function receiveInquiry(firebaseInquiry){
  return {
    type: 'RECEIVE_INQUIRY',
    inquiry: firebaseInquiry
  };
}

export function deleteInquiry(firebaseInquiry){
  return {
    type: 'REMOVE_INQUIRY',
    id: firebaseInquiry.id
  };
}

// Items
export function addItem(_name, _imageUrl, _quantity){
  return () => items.push({
    name: _name,
    image: _imageUrl,
    quantity: _quantity
  });
}

export function receiveItem(firebaseItem){
  return {
    type: 'RECEIVE_ITEM',
    item: firebaseItem
  };
}

export function deleteItem(firebaseItem){
  return {
    type: 'REMOVE_ITEM',
    id: firebaseItem.id
  };
}

export function watchFirebaseItemsRef(){
  return (dispatch) => {
    items.on('child_added', data => {
      const newItem = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveItem(newItem));
    });
    inquiries.on('child_removed', data =>{
      const itemToBeDeleted = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(deleteItem(itemToBeDeleted));
    });
  }
}
