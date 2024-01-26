import {LocationType} from '../Models/Location/Location.model';
import ApiService from '../Service/ApiService';

export default {
  async fetchLocation(url: string): Promise<LocationType> {
    return await ApiService('', 'GET', undefined, {}, url);
  },
};
