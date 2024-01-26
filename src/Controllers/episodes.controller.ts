import ApiService from '../Service/ApiService';
import {EpisodeType} from '../Models/Episode/Episode.modal';

export default {
  async fetchEpisode(url: string): Promise<EpisodeType> {
    return await ApiService('', 'GET', undefined, {}, url);
  },
};
