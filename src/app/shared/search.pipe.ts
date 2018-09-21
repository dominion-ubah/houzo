import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return this.parseAlbToLoc(it.albumId).toLowerCase().includes(searchText);
    });
   }

   parseAlbToLoc(alb) {
    let loc = '';
    switch (alb ) {
      case 1 :
      loc = 'Lagos';
      break;
      case 2 :
      loc = 'Ogun';
      break;
      case 3 :
      loc = 'Oyo' ;
      break;
      case 4 :
      loc = 'PH';
      break;
      case 5 :
      loc = 'Abuja';
      break;
    default:
        loc = '';
    }
    return loc
    
  }
}