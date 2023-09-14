import { Component } from '@angular/core';
import { catsType } from 'src/app/models/cats-type';
import { CatService } from 'src/app/services/cat.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cats-table',
  templateUrl: './cats-table.component.html',
  styleUrls: ['./cats-table.component.css']
})
export class CatsTableComponent {
  displayedColumns: string[] = ['name','origin','description','weight'];
  dataSource= new MatTableDataSource<catsType>() ;

  element_data: catsType[] = []

    constructor(private catService: CatService) { }

    ngOnInit(): void {
      this.getCatsList();
    }

    getCatsList(){
      this.catService.getCatsList().subscribe(
        (res:any) => {
          for(let i=0; i<res.length; i++){
            const catData: catsType={
              name: res[i].name,
              origin: res[i].origin,
              description: res[i].description,
              weight: res[i].weight.metric
            };
            this.element_data.push(catData);
          }
          this.dataSource.data = this.element_data;
          console.log(res);

        },
        err => console.log(err)
      );
    }

}
