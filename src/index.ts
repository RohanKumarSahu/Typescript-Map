import { User } from './User';
import { Company } from './Company';
import { CustomMap } from "./customMaps";

const user =  new User()
const company = new Company()
const customMaps = new CustomMap('map');

customMaps.addMarker(user);
customMaps.addMarker(company);



