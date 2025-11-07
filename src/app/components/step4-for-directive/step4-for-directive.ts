import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  selector: 'app-step4-for-directive',
  imports: [Step3PersonTableInput],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
  person: Person[] = [{"firstname":"Candis","lastname":"Davidman","email":"cdavidman0@over-blog.com"},
{"firstname":"Hazlett","lastname":"Marshman","email":"hmarshman1@wufoo.com"},
{"firstname":"Kerr","lastname":"Stodhart","email":"kstodhart2@mail.ru"},
{"firstname":"Janine","lastname":"Tonks","email":"jtonks3@cloudflare.com"},
{"firstname":"Cosmo","lastname":"Meneer","email":"cmeneer4@irs.gov"},
{"firstname":"Harmonia","lastname":"Sketch","email":"hsketch5@weather.com"},
{"firstname":"Arlen","lastname":"Dorkens","email":"adorkens6@weibo.com"},
{"firstname":"Anallese","lastname":"Vitte","email":"avitte7@bing.com"},
{"firstname":"Margette","lastname":"Bretland","email":"mbretland8@people.com.cn"},
{"firstname":"Lacee","lastname":"Sloley","email":"lsloley9@statcounter.com"},
{"firstname":"Lisbeth","lastname":"Marini","email":"lmarinia@comsenz.com"},
{"firstname":"Corabel","lastname":"Winters","email":"cwintersb@mapy.cz"},
{"firstname":"Tory","lastname":"Gother","email":"tgotherc@buzzfeed.com"},
{"firstname":"Agata","lastname":"Duffield","email":"aduffieldd@tinyurl.com"},
{"firstname":"Danit","lastname":"Seery","email":"dseerye@unc.edu"},
{"firstname":"Dore","lastname":"Kitchaside","email":"dkitchasidef@issuu.com"},
{"firstname":"Freeland","lastname":"Silbert","email":"fsilbertg@nasa.gov"},
{"firstname":"Sheelagh","lastname":"Waind","email":"swaindh@51.la"},
{"firstname":"Seward","lastname":"Powlett","email":"spowletti@loc.gov"},
{"firstname":"Meara","lastname":"Hassan","email":"mhassanj@cyberchimps.com"}]

}
