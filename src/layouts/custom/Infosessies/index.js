import React from "react";
import SectionText from "../../../components/Content/SectionText";
import MailTo from "../../../components/MailTo";
import ExternalLink from "../../../components/ExternalLink";
import SubscribeModal from "./SubscribeModal";
import "./index.css";

class Infosessies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  componentDidMount() {
    setTimeout(
      () => this.setState({ showPopup: true }),
      3000
    );
  }

  componentWillUnmount() {
    this.setState({ showPopup: false });
  }

  render() {
    const { href, linkText } = this.props;
    const { showPopup } = this.state;

    return (
      <div>
        <SubscribeModal
          isOpen={showPopup}
          onClose={() =>
            this.setState({ showPopup: false })}
        />
        <SectionText
          title="Welkom op onze infosessies"
          href={href}
          linkText={linkText}
        >
          <div>
            Op onze infosessies leer je het project ten
            volle kennen. Je maakt er kennis met de aspecten
            rond de bouw, de prijs, de visie van de
            toekomstige bewoners rond het project. En dat
            allemaal door een aantal mensen van de huidige
            groep.
          </div>
          <br />
          <div>
            De eerstvolgende data waarop je lang kan komen:
            <ul>
              <li>
                <strong>Zondag 17 december, om 10u</strong>
              </li>
            </ul>
            <br />
            De infosessies vinden steeds plaats op onze
            site, in het klooster.
            <ul>
              <li>
                <strong> Blekerijstraat 22, Tielt </strong>
              </li>
            </ul>
            <br />
            Wil je graag meer weten? Of wil je ons laten
            weten dat je komt?
            <br />
            <br />
            Schrijf je in via het{" "}
            <strong>
              <ExternalLink
                href="http://www.cohousingprojects.be/index.php/interesseformulier"
                text="inschrijvingsformulier"
              />
            </strong>{" "}
            of stuur ons een mailtje:{" "}
            <strong>
              <MailTo
                emailAddress="stocktveld@gmail.com"
                text="stocktveld@gmail.com"
                subject="Interesse%20in%20de%20infosessie"
              />
            </strong>
          </div>
        </SectionText>
      </div>
    );
  }
}

Infosessies.propTypes = {
  href: React.PropTypes.string,
  linkText: React.PropTypes.string
};

export default Infosessies;
