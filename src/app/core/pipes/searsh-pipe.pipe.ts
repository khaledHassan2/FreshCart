import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searshPipe',
  standalone: true
})
export class SearshPipePipe implements PipeTransform {

  transform(product:any[],text:string): any[] {

    return product.filter( (item)=>item.title.toLowerCase().includes(text.toLowerCase()) );
  }

}
