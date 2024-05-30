import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  isPanelOpen = false;
  panelOpenState = false;

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }

  panels = [
    { title: 'Занятия', sublinks: ['Расписание'] },
    { title: 'Противодействие коррупции', sublinks: ['Нормативные правовые и иные акты в сфере противодействия коррупции',
                                                    'Антикоррупционная экспертиза',
                                                    'Методические материалы',
                                                    'Формы документов, связанных с противодействием коррупции, для заполнения',
                                                    'Сведения о доходах, расходах, об имуществе и обязательствах имущественного характера',
                                                    'Комиссия по соблюдению требований к служебному поведению и урегулированию конфликта интересов (аттестационная комиссия)',
                                                    'Обратная связь для сообщений о фактах коррупции',
                                                    'Информационные материалы']
    },
    { title: 'Информационная безопасноть', sublinks: ['Локальные нормативные акты в сфере обеспечения информационной безопасности обучающихся',
                                                      'Нормативное регулирование',
                                                      'Педагогическим работникам',
                                                      'Обучающимся',
                                                      'Родителям',
                                                      'Детские безопасные сайты']
     },
    { title: 'Организация питания', sublinks: ['Условия питания обучающихся (воспитанников), в том числе для инвалидов и лиц с ограниченными возможностями здоровья'] },
    { title: 'Формы обучения', sublinks: ['Очная форма обучения', 'Заочная форма обучения'] },
    { title: 'Руководство', sublinks: ['Руководство']  },
    { title: 'Рабочая воспитательная программа', sublinks: ['Документы', 'План воспитательной работы 2022-2023', 'План воспитательной работы 2023-2024'] },
    { title: 'Ссылки на официальные сайты', sublinks: ['Ссылки на официальные сайты системы образования'] },
    { title: 'Охрана труда', sublinks: ['Охрана труда'] },
    { title: 'Образование', sublinks: ['Образование'] }
  ];
}
