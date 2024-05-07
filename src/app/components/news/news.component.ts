import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  posts = [
    { data: '01 мая 2024 год',
      text: '🌸 Друзья, наступило время долгожданных майских праздников! Как лучше провести эти выходные? 🌳 Отправьтесь на природу: соберите друзей, запаситесь вкусными угощениями и наслаждайтесь природой! Только не забывайте соблюдать чистоту и порядок 🎉 Посетите праздничные мероприятия: фестивали, концерты, выставки, игры – окунитесь в атмосферу праздника! 🌍 Отправьтесь в небольшое путешествие: экскурсии, новые места и интересные знакомства ждут вас! 🎨 Попробуйте что-то новое: откройте для себя хобби или посетите мастер-класс! Не забывайте, что отдых может быть не только веселым, но и полезным (и безопасным). 💪 Желаем вам незабываемых майских праздников! 🌼✨ Поделитесь в комментариях, какие планы у вас на выходные! 💬',
      links: ['assets/images/news1.jpg', 'assets/images/news11.jpg']
    },
    { data: '03 мая 2024 год',
      text: 'XV Всероссийская конференция исследовательских работ "Юность, Наука, Культура - Сибирь" 23-25 апреля в Новосибирске прошла Всероссийская конференция учащихся «Юность, Наука, Культура – Сибирь», собравшая более восьмидесяти старшеклассников из Новосибирска и Новосибирской области, Новокузнецка, Томска, Красноярска и Дивногорска, Барнаула и Горно-Алтайска. Организаторы конференции: Общероссийская Малая академия наук «Интеллект будущего» и ее новосибирское отделение – МБУДО Дом детского творчества им. В. Дубинина. «ЮНК-Сибирь» проводится ежегодно, начиная с 2008 года, и в этом году стала юбилейной пятнадцатой конференцией! В соответствии с Приказом Министерства Просвещения Российской Федерации от 31 августа 2023 года № 649 Всероссийский конкурс исследовательских и проектных работ учащихся «Юность, наука, культура» включен в «Перечень олимпиад и иных интеллектуальных и (или) творческих конкурсов, мероприятий, направленных на развитие интеллектуальных и творческих способностей, к занятиям физической культурой и спортом, интереса к научной (научно-исследовательской), творческой, физкультурно-спортивной деятельности, а также на пропаганду научных знаний, творческих и спортивных достижений на 2023/2024 учебный год». К участию в конкурсе принимались исследовательские работы учащихся 8-11 классов по научно-техническому направлению, естественным и гуманитарным наукам. У «ЮНК-Сибирь» всегда очень серьезный экспертный состав – привлекаются ведущие ученые города и Сибирского отделения РАН. Обучающий ся объединения "Перспектива будущего" Солдатов Эдуард успешно выступил с исследовательской работой "Современное состояние и перспективы развития рынка банковских карт на примере Новосибирской области" и стал лауреатом 1 степени. Эксперты отметили высокий уровень представленных на конференции работ, актуальность поднимаемых вопросов, аргументированность позиций участников! Поздравляем Эдуарда и его научного руководителя Аракелян Юлию Сергеевну.',
      links: ['assets/images/news2.jpg', 'assets/images/news22.jpg']
    },
    {
      data: '29 апреля 2024 год',
      text: '26 апреля методист ЦДО Юлия Сергеевна Новикова и педагог-организатор Тимофей Валерьевич Калинин стали участниками встречи по теме «Аграрное образование школьников Новосибирской области: новые вызовы, тенденции и приоритеты развития». Встреча проходила в зале ученого совета Новосибирского ГАУ и объединила в себе представителей 21 муниципального образования – директора образовательных организаций, заместители директоров образовательных организаций общего и дополнительного образования, руководители трудовых объединений обучающихся, представители профессионального и высшего образования, а также представители аграрного сектора экономики региона. Организаторами выступили министерство образования Новосибирской области, ФГБОУ ВО «Новосибирский ГАУ», подразделение ОЦРТДиЮ Региональный модельный центр дополнительного образования детей. Мероприятие проводилось с целью повышения качества работы образовательных организаций по агроэкологическому образованию обучающихся, расширения партнерских отношений в области передовых цифровых технологий в агропромышленном комплексе, привлечения научного и бизнес-сообществ к работе с талантливыми школьниками.',
      links: ['assets/images/news3.jpg', 'assets/images/news33.jpg', 'assets/images/news333.jpg', 'assets/images/news3333.jpg', 'assets/images/news33333.jpg']
    },
    {
      data: '11 декабря 2023 год',
      text: 'Методист ЦДО Аракелян Ю.С. и ПДО Додонова О.Н. приглашены на Всероссийскую конференцию «Профориентация в системе дополнительного образования – 2023» для трансляции лучших практик, направленных на раннее профессиональное самоопределение обучающихся Всероссийская конференция состоится с 11 по 13 декабря 2023 года в г. Москва в Павильоне «АТОМ» ВДНХ, в рамках научно-просветительской программы международной выставки-форума «Россия». Конференция проводится Фондом содействия развитию современных информационных технологий и цифровизации экономики "Атом", при поддержке ФГБУК «Всероссийский центр развития художественного творчества и гуманитарных технологий» и ФГБОУ ДО «Федеральный центр дополнительного образования и организации отдыха и оздоровления детей» с целью обсуждения вопросов организации и трансляции лучших практик дополнительного образования и просветительской деятельности, направленных на раннее профессиональное самоопределение обучающихся через обновление содержания и технологий дополнительного образования по приоритетным направлениям развития. Важным аспектом формирования программы конференции станет диалог о стратегическом развитии системы дополнительного образования детей в процессе достижения Россией целей устойчивого развития мирового сообщества, эффективных решений реализации федерального проекта «Успех каждого ребенка» национального проекта «Образование» и плана мероприятий Десятилетия науки технологий. Также в рамках программы пройдут панельные дискуссии, мастер-классы и фасилитационная сессия: «Модель профориентационной работы в системе дополнительного образования», для участия в которой приглашена педагог Додонова О.Н. Отдельным мероприятием в рамках Конференции станет мероприятие по презентации лучших профориентационных практик в системе дополнительного образования детей - «Шоу практик», для участия в котором приглашена методист Аракелян Ю.С., как участник федерального этапа «Всероссийского конкурса образовательных практик по обновлению содержания и технологий дополнительного образования». В программе примут участие спикеры от фонда «АТОМ», ФГБУК «Всероссийский центр развития художественного творчества и гуманитарных технологий», ФГБОУ ДО ФЦДО, представители педагогического сообщества, Министерства просвещения Российской Федерации, а также представители региональных министерств.',
      links: ['assets/images/news4.jpg']
    },
    {
      data: '22 мая 2023 год',
      text: 'Городской конкурс «Юный пользователь» 12 мая 2023 года на базе МБОУ ДО ЦДО структурное подразделение «Центр информационных технологий» прошел ежегодный конкурс «Юный пользователь». Целью конкурса является активизация познавательного интереса младших школьников в области информатики и повышение мотивации изучения данной предметной области. В этом году в конкурсе приняли участие десять команд учащихся 3 - 4 классов из разных образовательных организаций города Искитима. Ребята показали свои знания в области информатики и продемонстрировали умения использовать графический редактор Paint для создания иллюстрации к стихотворению. По итогам конкурса, места распределились следующим образом: Диплом I степени – команда «Пиксель» МБОУ СОШ № 14; Диплом II степени – команда «Пельмени» МБОУ ДО ЦДО и команда «Кубик Рубик» МБОУ ООШ № 6; Диплом III степени – команда «Шлёпа» МБОУ СОШ № 11 и команда «Нави» МБОУ СОШ № 4. Сертификаты участников получили команды «Гипер спортсмены» МБОУ СОШ № 3, «AMD» - МАОУ СОШ № 9, «Абобусы» - МБОУ ООШ № 10, «Чёртики» - МБОУ СОШ № 8, «Апельсинки» - МБОУ СОШ № 5. Хочется пожелать участникам успехов в дальнейшем изучении информатики и неиссякаемых творческих идей.',
      links: ['assets/images/news5.jpg', 'assets/images/news55.jpg', 'assets/images/news555.jpg', 'assets/images/news5555.jpg', 'assets/images/news55555.jpg']
    },
    {
      data: '20 февраля 2023 год',
      text: '16 февраля 2023 года на базе «Центр информационных технологий» МБОУ ДО ЦДО была организована и проведена вторая встреча для учителей - руководителей проектных и исследовательских работ школьников в рамках работы методической школы по подготовке к XVIII городской конференции проектных и исследовательских работ школьников города Искитима (будет проходить с 3 по 24 марта 2023 г.). Тема встречи: «Современные ИКТ инструменты для организации исследования и оформления работ школьников». Основной спикер – Кочуев Валерий Валерьевич, эксперт в области инновационного обучения, познакомил участников с некоторыми онлайн инструментами для организации эффективной работы над проектами школьников. Учителя получили методические пособия с описанием современных ИКТ инструментов и практические рекомендации по их применению.',
      links: ['assets/images/news6.jpg', 'assets/images/news66.jpg', 'assets/images/news666.jpg']
    },
    {
      data: '24 июня 2022 год',
      text: '24 мая на базе МБОУ ДО ЦДО сп «Центр информационных технологий» прошло заключительное мероприятие городского проекта «Школа юного предпринимателя Start» в 2021-2022 учебном году - экономический квест. Участники квеста активно выполняли задания станций и смогли почувствовать себя в роли строителей, разработчиков игрушек и рекламных менеджеров. Постарались заглянуть в будущее и спрогнозировать будущую модель себя. В качестве экспертов в квесте приняли участие Адов Владислав Игоревич – депутат городского совета депутатов г. Искитима и Аракелян Юлия Сергеевна – руководитель муниципального методического объединения учителей экономики. Эксперты высоко оценили креативность, предприимчивость и новаторские идеи участников. Пожелали им дальнейшего развития и достижения своих целей. По результатам экономического квеста 1 место разделили команды «Лесные шишки» - МБОУ СОШ № 11 и «Ландыши» - МБОУ СОШ № 8; 2 место заняла команда «Ромашки» - МБОУ СОШ № 3; 3 место команда «Вектор 1.61» - МБОУ СОШ № 14. Все Школьные предпринимательские команды получили право перейти на следующую ступень проекта «Первые шаги в предпринимательство», которая будет реализовываться в 2022-2023 учебном году.',
      links: ['assets/images/news7.jpg', 'assets/images/news77.jpg', 'assets/images/news777.jpg', 'assets/images/news7777.jpg', 'assets/images/news77777.jpg', 'assets/images/news777777.jpg', 'assets/images/news7777777.jpg']
    }
  ]
}
