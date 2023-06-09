export enum FilterByPeriodEnum {
  day = 1,
  week = 2,
  month = 3,
}

export interface IGetPrayerTimeCoordParams {
  coords: {
    lat: string;
    lng: string;
  };
}

export interface IGetPrayerTimeParams {
  code: string;
  filter: FilterByPeriodEnum;
  appid: string;
  appurl: string;
}

export interface IGetPrayerTimeResponse {
  data: {
    data: {
      attributes: {
        jakim_code: string;
        jakim_source: string;
      };
      code: string;
      place: string;
      provider: string;
      month: number;
      year: number;
      times: [[number]];
    };
  };
}
