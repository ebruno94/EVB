import inquiryListReducer from './../../src/reducers/inquiry-list-reducer';

describe('inquiryListReducer', () => {
  let action;
  const sampleInquiry = {
    name: 'Ernest',
    phone: '(123)456-7890',
    email: 'ernest@ernest.com',
    question: 'Let\'s meet',
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(inquiryListReducer({}, {type: null})).toEqual({});
  });

  test('Should add inquiry to inquiryList', () => {
    const {name, phone, email, question, id} = sampleInquiry;
    action = {
      type: 'ADD_INQUIRY',
      name,
      phone,
      email,
      question,
      id
    };
    expect(inquiryListReducer({}, action)).toEqual({
      [id]: {
        name,
        phone,
        email,
        question,
        id
      }
    });
  });

  test('Should delete inquiry from inquiryList', () => {
    const {name, phone, email, question, id} = sampleInquiry;
    action = {
      type: 'REMOVE_INQUIRY',
      id
    };
    expect(inquiryListReducer({
      [id]: {
        name,
        phone,
        email,
        question,
        id
      }
    }, action)).toEqual({});
  });
});
