import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent implements OnInit{


  excelData: any[]=[];

  ngOnInit(): void {
    this.loadExcelFile()
      
  }

  loadExcelFile() {
    // Path to the Excel file in the assets folder
    const filePath = 'assets/Excells/CotisationSpeciale1.xlsx';

    fetch(filePath)
      .then(response => response.arrayBuffer())
      .then(buffer => {
        const workbook = XLSX.read(buffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      })
      .catch(error => {
        console.error('Error reading the Excel file:', error);
      });
  }





}