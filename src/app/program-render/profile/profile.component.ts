import { Component, Input } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { NormalComponent } from '../normal/normal.component';

export interface User {
  name: string;
  isAdmin: boolean;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Input({ required: true }) user?: User;

  getBioComponent() {
    return this.user?.isAdmin ? AdminComponent : NormalComponent;
  }

  updateField(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      console.log('The user pressed enter in the text field.');
    }
  }
}
