import React from "react";
import "./InsideHotel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const PropertyPolicies = () => {

    return (
        <div className="PropertyPolicies">
            <div id="hotel-policies" className="Policystyles__PolicyStyledWrapper-sc-1c9fldk-0 bJrRvy">
                <div className="Policystyles__PolicyHeaderStyled-sc-1c9fldk-1 cyPRSL">
                    <h2 className="Policystyles__PolicyHeaderTextStyled-sc-1c9fldk-2 jwBOfs">Property Policies</h2>
                    <p className="Policystyles__TimingPolicyWrapper-sc-1c9fldk-3 gQcjvk">
                        <span>Check-in Time: <strong>12 PM</strong> </span>
                        <span>Check-out Time: <strong>10 AM</strong>
                        </span>
                    </p>
                </div>
                <div className="dwebCommonstyles__BaseColumnWrap-sc-112ty3f-2 civGJZ">
                    <div className="dwebCommonstyles__BaseColumnWrap-sc-112ty3f-2 civGJZ">
                        <ul className="HouseRulesstyles__FeatureListUL-sc-5t10ue-2 bMWa-dl">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="1.5rem" width="1.5rem" margin="0px 1rem 0px 0px" fill="#46484d" className="HappyCheckPointIcon-sc-1g70zsr-0 nsHxJ">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m3.73 4.171a.86.86 0 0 0-.788.357L7.507 9.213a.18.18 0 0 1-.126.07.17.17 0 0 1-.135-.05L5.622 7.846A.859.859 0 0 0 4.408 9.06l2.473 2.234c.16.162.38.252.607.252h.069a.86.86 0 0 0 .626-.348l4.144-5.655a.862.862 0 0 0-.596-1.372z">
                                    </path>
                                </svg>
                                <p className="HouseRulesstyles__ListPara-sc-5t10ue-1 gmLhXm">Unmarried couples are not allowed</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="1.5rem" width="1.5rem" margin="0px 1rem 0px 0px" fill="#46484d" className="HappyCheckPointIcon-sc-1g70zsr-0 nsHxJ">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m3.73 4.171a.86.86 0 0 0-.788.357L7.507 9.213a.18.18 0 0 1-.126.07.17.17 0 0 1-.135-.05L5.622 7.846A.859.859 0 0 0 4.408 9.06l2.473 2.234c.16.162.38.252.607.252h.069a.86.86 0 0 0 .626-.348l4.144-5.655a.862.862 0 0 0-.596-1.372z">
                                    </path>
                                </svg>
                                <p className="HouseRulesstyles__ListPara-sc-5t10ue-1 gmLhXm">Primary guest should be atleast 18 years of age</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="1.5rem" width="1.5rem" margin="0px 1rem 0px 0px" fill="#46484d" className="HappyCheckPointIcon-sc-1g70zsr-0 nsHxJ">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m3.73 4.171a.86.86 0 0 0-.788.357L7.507 9.213a.18.18 0 0 1-.126.07.17.17 0 0 1-.135-.05L5.622 7.846A.859.859 0 0 0 4.408 9.06l2.473 2.234c.16.162.38.252.607.252h.069a.86.86 0 0 0 .626-.348l4.144-5.655a.862.862 0 0 0-.596-1.372z">
                                    </path>
                                </svg>
                                <p className="HouseRulesstyles__ListPara-sc-5t10ue-1 gmLhXm">Passport, Driving License, Govt. ID and Aadhar are accepted as ID proof(s)</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="1.5rem" width="1.5rem" margin="0px 1rem 0px 0px" fill="#46484d" className="HappyCheckPointIcon-sc-1g70zsr-0 nsHxJ">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m3.73 4.171a.86.86 0 0 0-.788.357L7.507 9.213a.18.18 0 0 1-.126.07.17.17 0 0 1-.135-.05L5.622 7.846A.859.859 0 0 0 4.408 9.06l2.473 2.234c.16.162.38.252.607.252h.069a.86.86 0 0 0 .626-.348l4.144-5.655a.862.862 0 0 0-.596-1.372z">
                                    </path>
                                </svg>
                                <p className="HouseRulesstyles__ListPara-sc-5t10ue-1 gmLhXm">Pets are not allowed</p>
                            </li>
                        </ul>
                    </div>
                    {/* <a href="/" data-testid="d-HouseRules-viewall" className="dwebCommonstyles__PrimaryLink-sc-112ty3f-11 HouseRulesstyles__MorePolicyLink-sc-5t10ue-3 bmajuy dLGoCB">View all 15 property policies</a> */}
                </div>
            </div>
        </div>
    );
}

export default PropertyPolicies;