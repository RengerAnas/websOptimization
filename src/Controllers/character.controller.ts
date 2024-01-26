import {END_POINTS} from '../Constants/API.Constants';
import {CharacterResType} from '../Models/Character/Character.model';
import ApiService from '../Service/ApiService';

export default {
  async fetchCharacter(): Promise<CharacterResType> {
    return await ApiService(END_POINTS.CHARACTER, 'GET');
  },
  async fetchNextCharacters(page: number): Promise<CharacterResType> {
    return await ApiService(END_POINTS.CHARACTER + `?page=${page}`, 'GET');
  },
};
