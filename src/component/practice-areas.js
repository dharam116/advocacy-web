import React, {Component} from 'react'
import Coverflow from 'react-coverflow'
import {Avatar, Divider} from '@material-ui/core'
import {Animation} from  'mdbreact'
import '../App.css'

class PracticeArea extends Component {
  constructor(props) {
    super(props);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return(
      <div style= {{background: 'linear-gradient(to bottom, white, #C0C0C0)', paddingTop: '8%'}}>
        <div style={{padding: '4%'}} className="text-center">
          <Animation type="bounceIn" duration="2s">
          <h2 className="font-weight-bold">Practice Area</h2><h6 className="font-weight-bold my-4">It has added practice area focus areas as a way to further define your practice area of expertise.</h6>
          </Animation><Divider />

          <Coverflow
          height={450}
          displayQuantityOfSide={1}
          navigation={false}
          enableHeading={false}
          >
            <div style={{padding: '5px'}}>
              <center><Avatar alt="FAmily Law" src="https://cdn4.iconfinder.com/data/icons/lawyer-set/150/lawyer-43-512.png" /></center>
              <b>Family Law</b><br />
              Marriage, Divorce, Alimony and maintenance, Domestic violence, 498a, Child custody, Annulment of marriage, Muslim law
            </div>

            <div style={{padding: '5px'}}>
            <center><Avatar alt="Criminal  Law" src="https://cdn4.iconfinder.com/data/icons/proglyphs-miscellaneous/512/Handcuffs-512.png" /></center>
              <b>Criminal Law</b><br />
              Cheque bounce, Fraud/Default, Forgery/Cheating, Breach of trust, FIR, Bail/Anticipatory Bail, Police action, Cybercrime, Trespass, Other criminal matters
            </div>

            <div style={{padding: '5px'}}>
              <center><Avatar alt="Property Law" src="https://png.pngtree.com/svg/20170525/mortgage_990623.png" /></center>
              <b>Property Law </b><br />
              Rights of sons/daughters/wife, Legal heir, Legal heirship certificate, Buying property, Selling property, Partition of property, Tenant/landlord/eviction, Neighbour issues, Sale agreement, Sale deed, Gift deed, Muslim law, Deed of family settlement, Power of attorney, Other property matters
            </div>

            <div style={{padding: '5px'}}>
              <center><Avatar alt="Civil Law" src="https://cdn3.iconfinder.com/data/icons/law-and-justice-1-1/66/49-512.png" /></center>
              <b>Civil Law</b><br />
              Consumer forum, Name change, Passport issues, Date of birth issues, Aadhar card issues, PAN card issues, Legal notice, Civil cases, Civil disputes, Banking, Loans, Recovery of money, Motor accident, Medical negligence, Defamation, Right to information, Summary suit, Insurance, Other civil matters
            </div>

            <div style={{padding: '5px'}}>
              <center><Avatar alt="Business Law" src="https://cdn1.iconfinder.com/data/icons/anger-management/317/anger-010-512.png" /></center>
              <b>Business Law</b><br />
              Corporate matters, Business contracts, Arbitration, Share transfer, Winding up petitions, Other business matters
            </div>

            <div style={{padding: '5px'}}>
              <center><Avatar alt="Labour Law" src="https://cdn.onlinewebfonts.com/svg/img_90943.png" /></center>
              <b>Labour</b><br /> 
              Employment, Leave, Salary and pension, Termination, Relieving letter, Disciplinary proceedings, Other labour issues
            </div>
          </Coverflow>

        </div>
      </div>
  );
  }
}

export default PracticeArea