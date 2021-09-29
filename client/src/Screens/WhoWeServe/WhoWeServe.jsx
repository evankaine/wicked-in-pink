import React from 'react'
import "./WhoWeServe.css"

export default function WhoWeServe() {
  return (
    <div className="whoweserve">
      <div className="whoweserve-wrapper">
        <div className="serve-header">
          <img src="https://static.wixstatic.com/media/3b1f02_20c818e1486a4413b9d1d12a4b99b200~mv2.png/v1/fill/w_600,h_234,al_c,q_85/Sr%20Caricat%20Logo.webp" />
          <div className="trinity-address">
            <p>
              271 Carew Street, Springfield, MA 01104
              Tel: 413-748-9230
            </p>
          </div>
        </div>
        <div className="text-wrapper">
          <p className="paragraph">
            The Sr. Caritas Cancer Center at Mercy Medical Center provides services to over one-third of all cancer patients in the Pioneer Valley area. The Sr. Caritas Cancer Center Patient Services Fund was established for the purpose of providing direct support to Cancer Center patients in dire financial need. This assistance will help patients cover unexpected expenses associated with their care. Direct Care Support does not include physician visits, hospital care or medical expenses. All applicants are reviewed on a case by case basis. This is a "last resort" fund for patients with meager assets and funds; much needed support for patients who may seek funds no more than two times per year. 
          </p>

          <p className="text-break">FUND PROVIDES DIRECT CARE SUPPORT FOR PATIENT</p>
          
          <div className="text-list">
            <p className="list-item"><span className="boldspan">MEDICATION:</span> Emergency funds to cover needed medications.</p>
            <br />
            <p className="list-item"><span className="boldspan">TRANSPORTATION:</span> Pay for transportation to and from appointments.</p>
            <br />
            <p className="list-item"><span className="boldspan">CLOTHES OR ACCESSORIES:</span> Purchase special clothes, shoes or other accessories related to cancer care and treatment.</p>
            <br />
            <p className="list-item"><span className="boldspan">NUTRITIONAL SUPPLEMENTS:</span> Nutritional supplements to help build the immune system and meet nutritional needs.</p>
            <br />
            <p className="list-item"><span className="boldspan">SPECIAL CIRCUMSTANCES:</span> Situational circumstances affecting patients daily and/or quality of life.</p>
            <br />
            <p className="list-item"><span className="boldspan">SPECIAL PROGRAMS AND SERVICES:</span> Special programs and services funded through the Sr. Caritas Cancer Center Patient Services Fund may include, but are not limited to subsidizing special programs and purchase of equipment to improve the delivery of care for Cancer Center patients.</p>
          </div>

        </div>
      </div> 
    </div>
  )
}
