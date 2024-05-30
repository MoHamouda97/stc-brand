import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
//import { MapTo } from "@adobe/aem-angular-editable-components";
import { Router } from "@angular/router";
//import { AppRoutingConstant } from "@core/constants/app-routing.constant";
//import { UrlBuilderService } from "@core/services";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class LandingComponent implements OnInit {
  @Input() logoImage: string = "img/landingpage/logo.png";
  @Input() headerImage: string = "img/landingpage/Header.png";
  @Input() btnLogin: string = "Login";
  @Input() hompageImg: string = "img/landingpage/homepage.png";
  @Input() headerConfig: any = {
    subtitle: "Brand Center",
    title: "Digital Asset Management Platform for Enterprise Usability.",
    decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat massa ut purus auctor laoreet.",
    button: "Get started",
  };
  @Input() bodyConfig: any[] = [];
  @Input() videoDemoConfig: any = {
    title: "Demo video goes here",
    decs: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It ",
    image: ''
  }
  @Input() aboutUs: any = {
    follow: "Follow us",
    resource: 'Resource',
    learnmore: 'Learn more',
    contact: 'Get in touch',
  }
  @Input() resourceList: any[]=[{value: "Lorem Ipsum"},{value: "Lorem Ipsum"},{value: "Lorem Ipsum"},{value: "Lorem Ipsum"}];
  @Input() contactList: any[]=[{value: "Lorem Ipsum"},{value: "Lorem Ipsum"},{value: "Lorem Ipsum"},{value: "Lorem Ipsum"}];
  @Input() learnmoreList: any[]=[{value: "Lorem Ipsum"},{value: "Lorem Ipsum"},{value: "Lorem Ipsum"},{value: "Lorem Ipsum"}];

  @Input() footerConfig: string = 'Lorem2022. All rights reserved.';

  @Input() endpoint!: { [key: string]: string };

  constructor( private router: Router, /*private urlBuilderService: UrlBuilderService*/ ) {}

  ngOnInit(): void {
    console.log(this.bodyConfig)
  }

  loginPage() {
            this.router.routeReuseStrategy.shouldReuseRoute = () => {
                return false;
              };
    //window.location.href = this.urlBuilderService.buildUrlFromRelativePath("home.html");
  }
}

//MapTo("stcdam/components/landing-page")(LandingComponent);
