import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScholarshipDetails } from '../models/ScholarshipDetails';

@Component({
  selector: 'app-scholorship',
  templateUrl: './scholorship.component.html'
})
export class ScholorshipComponent {
  totalCount: number;


  scholarshipDetails: ScholarshipDetails[] = [
    {
      scholarshipType: 'Full Scholarship', scholarshipDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', scholarshipFee: '10,00 USD', scholarshipValidity: 'Domestic', degreeType: 'Bachelor', inTake: 'May 2020', lastDate: '18 May 2020'
    },
    {
      scholarshipType: 'Half Scholarship', scholarshipDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', scholarshipFee: '12,00 USD', scholarshipValidity: 'Domestic', degreeType: 'Bachelor', inTake: 'May 2020', lastDate: '18 May 2020'
    },
    {
      scholarshipType: 'Full Scholarship1', scholarshipDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', scholarshipFee: '10,00 USD', scholarshipValidity: 'Domestic', degreeType: 'Bachelor', inTake: 'May 2020', lastDate: '18 May 2020'
    },
    {
      scholarshipType: 'Half Scholarship1', scholarshipDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', scholarshipFee: '12,00 USD', scholarshipValidity: 'Domestic', degreeType: 'Bachelor', inTake: 'May 2020', lastDate: '18 May 2020'
    },];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.totalCount = this.scholarshipDetails.length;

  }
}
