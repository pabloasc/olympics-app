import medals from './GetMedalTableNOCDetail_Season.json';

export default class Service {
  static getMedals() {
    return medals ? medals : {};
  };
}
