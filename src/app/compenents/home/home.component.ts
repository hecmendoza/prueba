import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['region', 'nombre', 'lengua'];
  dataSource! : MatTableDataSource<any>;

  constructor(
    private router: Router,
    private countryService: CountryService) { 
      
    }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.countryService.getPaises().subscribe(response=>{
      this.dataSource = new MatTableDataSource(response);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  salir(){
    localStorage.removeItem('user');
    localStorage.removeItem('pass');

    this.router.navigate(['login']);
  }

}
