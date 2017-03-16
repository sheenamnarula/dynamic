import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { DivisionQuestion } from './question-division';
import { PersonalInfoQuestion } from './question-personalInfo';
import { SkillsInfoQuestion } from './question-skills';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      // persnal info
      new PersonalInfoQuestion({
        key: 'personalInfo',
        label: 'PERSONAL INFO',
        order: 1,
        options: [
          { "key": "Name", "value": "sheenam" },
          { "key": "Email", "value": "sankhlasiaNI@gmail.com" },
          { "key": "AGE  and sex", "value": "23"}
        ]
      }),

      new SkillsInfoQuestion({
        key: 'skillsInfo',
        label: 'SKILLS INFO',
        order: 2,
        options: [
          { "key": "JAVA", "value": "EXP 2" },
          { "key": ".NET", "value": "EXP 4" }
        ]
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
