import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from  '@salesforce/resourceUrl/PortfolioAssets';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Protfolio__c.FullName__c'
import DESIGNATION from '@salesforce/schema/Protfolio__c.Designation__c'
import COMPANYNAME from '@salesforce/schema/Protfolio__c.CompanyName__c'
import COMPANYLOCATION from '@salesforce/schema/Protfolio__c.CompanyLocation__c'

export default class ProtfolioBanner extends LightningElement {
    @api recordId //= 'a09NS00000TTyT7YAL';

    @api linkedinUrl //= 'https://www.linkedin.com/in/vikaskumar-pandey/';
    @api youtubeUrl //= '';
    @api githubUrl//='https://github.com/VikasCodesSF';
    @api twitterUrl //= '';
    @api trailheadUrl //='';
    @api bloggerUrl //='';


    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
    trailhead1 = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    blogger = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`

    @wire(getRecord,  {recordId:'$recordId', fields: [FULLNAME,DESIGNATION,COMPANYLOCATION,COMPANYNAME]})
    portfolioData 

    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }
    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }
    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANYNAME)
    }
    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANYLOCATION)
    }
}