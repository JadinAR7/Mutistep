export const validateContactForm = (values) => {
    const errors = {};

    if (!values.fullName) {
        errors.fullName = 'Required';
    } else if (values.fullName.length < 5) {
        errors.fullName = 'Must be at least 5 characters. ';
    } else if (values.fullName.length > 15) {
        errors.fullName = 'Must be no more than 15 characters. ';
    }

    const reg = /^\d+$/;

    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should only contain numbers';
    } else if (values.phoneNum.length < 10) {
        errors.phoneNum = 'Phone number must contain 10 digits'
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
}