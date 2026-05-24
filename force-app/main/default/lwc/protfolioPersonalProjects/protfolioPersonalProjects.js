import { LightningElement, api } from 'lwc';
import PortfolioAssets from  '@salesforce/resourceUrl/PortfolioAssets';

export default class ProtfolioPersonalProjects extends LightningElement {

    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`

    projects=[
        {
            "name": "BMI Calculator App",
            "img":this.BMICalculator,
            "link":"https://vikaskumar-portfolio-dev-ed.develop.my.site.com"
        },
        {
            "name": "Alarm lock",
            "img":this.AlarmClock,
            "link":"https://vikaskumar-portfolio-dev-ed.develop.my.site.com"
        },
        {
            "name": "Currency Calculator App",
            "img":this.CurrencyCalculator,
            "link":"https://vikaskumar-portfolio-dev-ed.develop.my.site.com"
        },
        {
            "name": "WeatherApp App",
            "img":this.WeatherApp,
            "link":"https://vikaskumar-portfolio-dev-ed.develop.my.site.com"
        },
        {
            "name": "Note Taking App",
            "img":this.NoteApp,
            "link":"https://vikaskumar-portfolio-dev-ed.develop.my.site.com"
        }
    ]
}