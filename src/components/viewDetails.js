import React, { Component } from 'react';
import { connect } from 'react-redux';
//Local Imports

import { Button, Header, Segment, TransitionablePortal } from 'semantic-ui-react'
class viewDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, listingDetail: '' };

    }

    handleOpen = () => this.setState({ open: true })

    handleClose = () => this.setState({ open: false })

    render() {
        const { open } = this.state
        let listingDetail = 'Loading...';
        switch (this.props.type) {
            case 'tmv2':

                let tmv2detail = this.props.details;
                listingDetail =
                    (tmv2detail) ? <table className="table table-bordered" >
                        <tbody>
                            <tr><td><label>Licensee</label></td><td>{tmv2detail.LICENSEE}</td></tr>
                            <tr><td><label>Manufacturer</label></td><td>{tmv2detail.MANUFACTURER}</td></tr>
                            <tr><td><label>Mixing Valve</label></td><td>{tmv2detail.NEW_COMM}</td></tr>
                            <tr><td><label>Unique Valve ID</label></td><td>{tmv2detail.UNIQUE_ID}</td></tr>
                            <tr><td><label>Certificate Numbers</label></td><td>{tmv2detail.CERTIFICATE_NUMBER}</td></tr>
                            <tr><td><label>HP_1111</label></td><td>{tmv2detail.HP_1111 == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}</td></tr>
                            <tr><td><label>B</label></td><td>{tmv2detail.HPB == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv2detail.HPB_COMMENT}</td></tr>
                            <tr><td><label>S</label></td><td>{tmv2detail.HPS == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv2detail.HPS_COMMENT}</td></tr>
                            <tr><td><label>W</label></td><td>{tmv2detail.HPW == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv2detail.HPW_COMMENT}</td></tr>
                            <tr><td><label>T</label></td><td>{tmv2detail.HPT == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv2detail.HPT_COMMENT}</td></tr>
                            <tr><td><label>Cold Isol 46</label></td><td>{tmv2detail.COLD_ISOL_46_HP == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}</td></tr>
                            <tr><td><label>LP_1287</label></td><td>{tmv2detail.LP_1287 == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}</td></tr>
                            <tr><td><label>B</label></td><td>{tmv2detail.LPB == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv2detail.LPB_COMMENT}</td></tr>
                            <tr><td><label>S</label></td><td>{tmv2detail.LPS == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv2detail.LPS_COMMENT}</td></tr>
                            <tr><td><label>W</label></td><td>{tmv2detail.LPW == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv2detail.LPW_COMMENT}</td></tr>
                            <tr><td><label>T</label></td><td>{tmv2detail.LPT == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv2detail.LPT_COMMENT}</td></tr>
                            <tr><td><label>T 0.2</label></td><td>{tmv2detail.LPTX == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv2detail.LPTX_COMMENT}</td></tr>
                            <tr><td><label>Cold Isol 46</label></td><td>{tmv2detail.COLD_ISOL_46_LP == '1' ? <span className="glyphicon glyphicon-ok"></span> : '' == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}</td></tr>
                            <tr><td><label>Comments</label></td><td>{tmv2detail.COMMENTS}</td></tr>
                        </tbody>
                    </table> : "";


                break;
            case 'tmv3':
                let tmv3Details = this.props.details;
                listingDetail =
                    (tmv3Details) ? <table className="table table-bordered" >
                        <tbody>
                            <tr><td><label>Factor</label></td><td>{tmv3Details.FACTOR}</td></tr>
                            <tr><td><label>Mixing Valve</label></td><td>{tmv3Details.APPROVED_MIXING_VALVE}</td></tr>
                            <tr><td><label>Certificate </label></td><td>{tmv3Details.CERTIFICATE_NUMBER}</td></tr>
                            <tr><td><label>HPB</label></td><td>{tmv3Details.HPB == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.HPB_COMMENT}</td></tr>
                            <tr><td><label>HPS</label></td><td>{tmv3Details.HPS == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.HPS_COMMENT}</td></tr>
                            <tr><td><label>HPW</label></td><td>{tmv3Details.HPW == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.HPW_COMMENT}</td></tr>
                            <tr><td><label>HPT44</label></td><td>{tmv3Details.HPT44 == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.HPT44_COMMENT}</td></tr>
                            <tr><td><label>HPT46</label></td><td>{tmv3Details.HPT46 == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.HPT46_COMMENT}</td></tr>
                            <tr><td><label>HPD44</label></td><td>{tmv3Details.HPD44 == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.HPD44_COMMENT}</td></tr>
                            <tr><td><label>HPD46</label></td><td>{tmv3Details.HPD46 == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.HPD46_COMMENT}</td></tr>
                            <tr><td><label>LPB</label></td><td>{tmv3Details.LPB == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.LPB_COMMENT}</td></tr>
                            <tr><td><label>LPS</label></td><td>{tmv3Details.LPS == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.LPS_COMMENT}</td></tr>
                            <tr><td><label>LPW</label></td><td>{tmv3Details.LPW == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.LPW_COMMENT}</td></tr>
                            <tr><td><label>LPT44</label></td><td>{tmv3Details.LPT44 == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.LPT44_COMMENT}</td></tr>
                            <tr><td><label>LPT46</label></td><td>{tmv3Details.LPT46 == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.LPT46_COMMENT}</td></tr>
                            <tr><td><label>LPD44</label></td><td>{tmv3Details.LPD44 == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.LPD44_COMMENT}</td></tr>
                            <tr><td><label>LPD46</label></td><td>{tmv3Details.LPD46 == '1' ? <span className="glyphicon glyphicon-ok"></span> : ''}{tmv3Details.LPD46_COMMENT}</td></tr>
                            <tr><td><label>Comments</label></td><td>{tmv3Details.COMMENTS}</td></tr>
                        </tbody>
                    </table> : "";

                break;
            case 'dtc':
                let dtcFile = this.props.details;
                listingDetail = (dtcFile) ?
                    <table className="table table-bordered" >
                        <tbody>
                            <tr><td><label>Company</label></td><td>{dtcFile.MANUFACTURER}</td></tr>
                            <tr><td><label>Approved Mixing Valve</label></td><td>{dtcFile.APPROVED_MIXING_VALVE}</td></tr>
                            <tr><td><label>Description</label></td><td>{dtcFile.DESCRIPTION_PRODCERT}</td></tr>
                            <tr><td><label>Unique Id</label></td><td>{dtcFile.UNIQUE_ID}</td></tr>
                            <tr><td><label>Certificate Number</label></td><td>{dtcFile.CERTIFICATE_NUMBER}</td></tr>
                            <tr><td><label>Certification ID</label></td><td>{dtcFile.CERT_ID}</td></tr>
                            <tr><td><label>Expiry</label></td><td>{dtcFile.EXPIRY_DATE}</td></tr>
                        </tbody>
                    </table> : "";

                break;
            case 'cias':
                let ciasfilesall = (this.props.details);
                listingDetail =
                    (ciasfilesall) ? <table className="table table-bordered" >
                        <tbody>
                            <tr><td><label>Company</label></td><td>{ciasfilesall.MANUFACTURER}</td></tr>
                            <tr><td><label>Description</label></td><td>{ciasfilesall.DESCRIPTION_PRODCERT}</td></tr>
                            <tr><td><label>Sizes</label></td><td>{ciasfilesall.SIZES_CIAS}</td></tr>
                            <tr><td><label>Certification Number</label></td><td>{ciasfilesall.CERTIFICATE_NUMBER}</td></tr>
                            <tr><td><label>Certification ID</label></td><td>{ciasfilesall.CERT_ID}</td></tr>
                        </tbody>
                    </table> : "";

                break;
            case 'pdcert':
                let pdcertFiles = this.props.details;
                listingDetail =
                    (pdcertFiles) ? <table className="table table-bordered" >
                        <tbody>
                            <tr><td><label>Product Standard</label></td><td>{pdcertFiles.PERFORMANCE_STANDARD}</td></tr>
                            <tr><td><label>Description</label></td><td>{pdcertFiles.DESCRIPTION_PRODCERT}</td></tr>
                            <tr><td><label>Certificate Number</label></td><td>{pdcertFiles.CERTIFICATE_NUMBER}</td></tr>
                            <tr><td><label>Certificate ID</label></td><td>{pdcertFiles.CERT_ID}</td></tr>
                            <tr><td><label>Expiry</label></td><td>{pdcertFiles.EXPIRY_DATE}</td></tr>
                        </tbody>
                    </table> : "";
                break;
            default:

        }
        return (
            <TransitionablePortal
                closeOnTriggerClick
                onOpen={this.handleOpen}
                onClose={this.handleClose}
                openOnTriggerClick
                trigger={(                    
                    <a style={{'cursor':'pointer'}} content={this.props.num}
                        negative={open}
                        positive={!open}>{this.props.num}</a>
                    
                )}
            >
                <Segment style={{ left: '30%', position: 'absolute', top: '8%', zIndex: 1000, width: '50%' }}>
                    <Header>Details</Header>
                    <p>{listingDetail}</p>
                </Segment>
            </TransitionablePortal>
        );
    }
};

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(viewDetails);
