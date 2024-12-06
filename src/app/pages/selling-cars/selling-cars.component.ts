import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {FilterBarComponent} from '../../components/filter-bar/filter-bar.component';

@Component({
    selector: 'app-selling-cars',
    imports: [
        NgForOf,
        FilterBarComponent
    ],
    templateUrl: './selling-cars.component.html',
    styleUrl: './selling-cars.component.css'
})
export class SellingCarsComponent {
 Cars = [
   {
     image:
       "https://files2.aster.kz/market/aster/2024-10/287528_bd9650d9-b165-4683-b0c1-c10553fbf5a2_L_resolution2084x1173.webp",
     price: "11 250 000 ₸",
     monthlyPrice: "от 330 271₸/мес",
     name: "VOLKSWAGEN TIGUAN 2021\n",
     specs: "1.4 л • Робот • Передний",
     location: "Алматы",
     date: "14 октября",
   },
   {
     image:
       "https://files2.aster.kz/market/aster/2024-10/287528_bd9650d9-b165-4683-b0c1-c10553fbf5a2_L_resolution2084x1173.webp",
     price: "11 250 000 ₸",
     monthlyPrice: "от 330 271₸/мес",
     name: "VOLKSWAGEN TIGUAN 2021\n",
     specs: "1.4 л • Робот • Передний",
     location: "Алматы",
     date: "14 октября",
   },
   {
     image:
       "https://files2.aster.kz/market/aster/2024-10/287528_bd9650d9-b165-4683-b0c1-c10553fbf5a2_L_resolution2084x1173.webp",
     price: "11 250 000 ₸",
     monthlyPrice: "от 330 271₸/мес",
     name: "VOLKSWAGEN TIGUAN 2021\n",
     specs: "1.4 л • Робот • Передний",
     location: "Алматы",
     date: "14 октября",
   },
   {
     image:
       "https://files2.aster.kz/market/aster/2024-10/287528_bd9650d9-b165-4683-b0c1-c10553fbf5a2_L_resolution2084x1173.webp",
     price: "11 250 000 ₸",
     monthlyPrice: "от 330 271₸/мес",
     name: "VOLKSWAGEN TIGUAN 2021\n",
     specs: "1.4 л • Робот • Передний",
     location: "Алматы",
     date: "14 октября",
   },
   {
     image:
       "https://files2.aster.kz/market/aster/2024-10/287528_bd9650d9-b165-4683-b0c1-c10553fbf5a2_L_resolution2084x1173.webp",
     price: "11 250 000 ₸",
     monthlyPrice: "от 330 271₸/мес",
     name: "VOLKSWAGEN TIGUAN 2021\n",
     specs: "1.4 л • Робот • Передний",
     location: "Алматы",
     date: "14 октября",
   },
   {
     image:
       "https://files2.aster.kz/market/aster/2024-10/287528_bd9650d9-b165-4683-b0c1-c10553fbf5a2_L_resolution2084x1173.webp",
     price: "11 250 000 ₸",
     monthlyPrice: "от 330 271₸/мес",
     name: "VOLKSWAGEN TIGUAN 2021\n",
     specs: "1.4 л • Робот • Передний",
     location: "Алматы",
     date: "14 октября",
   },
   {
     image:
       "https://files2.aster.kz/market/aster/2024-10/287528_bd9650d9-b165-4683-b0c1-c10553fbf5a2_L_resolution2084x1173.webp",
     price: "11 250 000 ₸",
     monthlyPrice: "от 330 271₸/мес",
     name: "VOLKSWAGEN TIGUAN 2021\n",
     specs: "1.4 л • Робот • Передний",
     location: "Алматы",
     date: "14 октября",
   },
   {
     image:
       "https://files2.aster.kz/market/aster/2024-10/287528_bd9650d9-b165-4683-b0c1-c10553fbf5a2_L_resolution2084x1173.webp",
     price: "11 250 000 ₸",
     monthlyPrice: "от 330 271₸/мес",
     name: "VOLKSWAGEN TIGUAN 2021\n",
     specs: "1.4 л • Робот • Передний",
     location: "Алматы",
     date: "14 октября",
   },

 ]

}
