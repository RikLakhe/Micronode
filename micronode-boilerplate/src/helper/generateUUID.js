import {v4 as uuidv4} from 'uuid';

const generateUUID = () => uuidv4().split("-").join("");

export default generateUUID;
