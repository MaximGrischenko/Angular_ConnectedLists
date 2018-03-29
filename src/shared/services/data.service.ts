import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService {
  createDb() {
      const galary = [
        {
          id: 1,
          url: '../../../../assets/images/photo-1.png'
        },
        {
          id: 2,
          url: '../../../../assets/images/photo-2.png'
        },
        {
          id: 3,
          url: '../../../../assets/images/photo-3.png'
        },
        {
          id: 4,
          url: '../../../../assets/images/photo-4.png'
        },
        {
          id: 5,
          url: '../../../../assets/images/photo-1.png'
        },
        {
          id: 6,
          url: '../../../../assets/images/photo-2.png'
        },
        {
          id: 7,
          url: '../../../../assets/images/photo-5.png'
        },
        {
          id: 8,
          url: '../../../../assets/images/photo-6.png'
        },
        {
          id: 9,
          url: '../../../../assets/images/photo-7.png'
        },
        {
          id: 10,
          url: '../../../../assets/images/photo-8.png'
        },
        {
          id: 11,
          url: '../../../../assets/images/photo-5.png'
        },
        {
          id: 12,
          url: '../../../../assets/images/photo-6.png'
        }
      ];

  return {galary};
  }
}
