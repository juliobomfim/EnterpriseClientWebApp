import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpProviderService } from './Service/http-provider.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  enterpriseClients: any[] = [];
  showSuccessMessage = false;
  showWarningMessage = false;

  constructor(private httpProviderService: HttpProviderService) {}

  ngOnInit() {
    this.loadEnterpriseClients();
  }

  loadEnterpriseClients() {
    this.httpProviderService.getAllEnterpriseClients().subscribe((response) => {
      this.enterpriseClients = response.data;
    });
  }

  addEnterpriseClient() {
    const entity = { enterpriseClientName: 'New Client', enterpriseScale: 'Small' };
    console.log(this.enterpriseClients);
    this.httpProviderService.createEnterpriseClient(entity).subscribe({
      next: (response) => {
        this.enterpriseClients.push(response.data);
      },
      error: (err) => {
        console.error('Add Error:', err);
      }
    });
  }

  updateEnterpriseClient(entity: any) {
    if (entity.enterpriseClientName == ''){
      this.showWarningMessage = true;

      setTimeout(() => {
        this.showWarningMessage = false;
      }, 3000);

      return;
    }

    const updatedEntity = { ...entity };
    this.httpProviderService.saveEnterpriseClient(updatedEntity).subscribe({
      next: (response) => {
        this.showSuccessMessage = true;
        const index = this.enterpriseClients.findIndex((p) => p.enterpriseClientId === entity.enterpriseClientId);
        this.enterpriseClients[index] = updatedEntity;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      },
      error: (err) => {
        console.error('Update Error:', err);
      }
    });
  }

  deleteEnterpriseClient(id: string) {
    this.httpProviderService.deleteEnterpriseClientById(id).subscribe({
        next: (response) => {
          this.enterpriseClients = this.enterpriseClients.filter((e) => e.enterpriseClientId  !== id);
        },
        error: (err) => {
          console.error('Delete Error:', err);
        }
    });
  }

  closeAlert() {
    this.showSuccessMessage = false;
  }
}
