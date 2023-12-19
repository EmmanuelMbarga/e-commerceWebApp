import React from "react";
import paiementImg from "../images/imgconnexion/imgpaiement.jpg";
import mobilMoney from "../images/ImgPub/mobile-money.jpg";
import Stripelogo from "../images/ImgPub/stripepaie.jpg";
const SystemePaiement = () => {
  return (
    <div className="mt-10">
      <img
        src={paiementImg}
        alt="Austin shop"
        className=" h-[600px] w-[100%] object-cover"
      />
      <h1 className="text-center my-32 text-yellow-700 text-4xl">
        Adoptez nos systemes de paiements fiable et securisé
      </h1>

      <div className="grid grid-cols-2 gap-6 absolute left-[20%] mb-60">
            <a href="https://hter.link/BxSb6">
                 <div className="border w-96 mb-60">
                    <img src={mobilMoney} alt="paiement par OM" className="w-96 h-[184px]"/>
                    <p className="text-sm p-10">faciliter vos transaction via les operateurs locaux sans risques et avec confiances</p>
                </div>
            </a>
            <div className="w-96  border mb-60">
                <img src={Stripelogo} alt="paiement par OM"/>
                <p className="text-sm p-10">achetez au niveau international grace a notre partenaire Stripe</p>

            </div>
      </div>
    </div>
  );
};

export default SystemePaiement;
