import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Companies() {
	const { t } = useTranslation();
	return (
		<div className="Companies">
			<h1>{t("ORGANIZATIONS.HEADER")}</h1>
			<p>{t("ORGANIZATIONS.INFO")}</p>
			<p>{t("ORGANIZATIONS.INFO_2")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/organizations/initial-application">
					{t("GENERAL.IA")}
				</NavLink>
			</div>

			<h1>{t("ORGANIZATIONS.THE_FAIR.HEADER")}</h1>
			<p>{t("ORGANIZATIONS.THE_FAIR.INFO")}</p>
			<p>{t("ORGANIZATIONS.THE_FAIR.INFO_2")}</p>

			<h2>{t("ORGANIZATIONS.THE_FAIR.PRICING.HEADER")}</h2>
			<p>{t("ORGANIZATIONS.THE_FAIR.PRICING.BASE")}</p>
			<ul>
				<li>{t("ORGANIZATIONS.THE_FAIR.PRICING.LIST_1")}</li>
				<li>{t("ORGANIZATIONS.THE_FAIR.PRICING.LIST_2")}</li>
				<li>{t("ORGANIZATIONS.THE_FAIR.PRICING.LIST_3")}</li>
				<li>{t("ORGANIZATIONS.THE_FAIR.PRICING.LIST_4")}</li>
				<li>{t("ORGANIZATIONS.THE_FAIR.PRICING.LIST_5")}</li>
				<li>{t("ORGANIZATIONS.THE_FAIR.PRICING.LIST_6")}</li>
			</ul>
			<p>{t("ORGANIZATIONS.THE_FAIR.PRICING.EXTRAS")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/organizations/prislista_digital.pdf">
					{t("ORGANIZATIONS.THE_FAIR.PORTFOLIO.HEADER")}
				</NavLink>
				<NavLink className="button" to="/organizations/company_VCF_guide.pdf">
					{t("ORGANIZATIONS.THE_FAIR.PRICING.BUTTON")}
				</NavLink>
			</div>
		</div>
	);
}
