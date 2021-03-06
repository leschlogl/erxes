import { AvatarWrapper } from 'modules/activityLogs/styles';
import { Icon, ModalTrigger, NameCard } from 'modules/common/components';
import { InfoWrapper, Links } from 'modules/common/styles/main';
import { renderFullName } from 'modules/common/utils';
import { CustomerForm } from 'modules/customers/containers';
import { ICustomer } from 'modules/customers/types';
import * as React from 'react';
import { Name } from '../../styles';

type Props = {
  customer: ICustomer;
  showUserStatus?: boolean;
  showUserPosition?: boolean;
};

class InfoSection extends React.Component<Props> {
  renderLink(value, icon) {
    let link = value;

    if (!value) {
      return null;
    }

    if (!value.includes('http')) {
      link = 'https://'.concat(value);
    }

    return (
      <a href={link} target="_blank">
        <Icon icon={icon} />
      </a>
    );
  }

  renderLinks(links) {
    return (
      <Links>
        {this.renderLink(links.facebook, 'facebook')}
        {this.renderLink(links.twitter, 'twitter')}
        {this.renderLink(links.linkedIn, 'linkedin-logo')}
        {this.renderLink(links.youtube, 'youtube')}
        {this.renderLink(links.github, 'github')}
        {this.renderLink(links.website, 'earthgrid')}
      </Links>
    );
  }

  renderPosition() {
    if (!this.props.showUserPosition) {
      return null;
    }

    return <p>{this.props.customer.position}</p>;
  }

  renderStatus(isUser) {
    if (!this.props.showUserStatus) {
      return null;
    }

    return <div>{isUser ? 'User' : 'Visitor'}</div>;
  }

  render() {
    const { customer } = this.props;
    const { links = {}, isUser } = customer;

    return (
      <InfoWrapper>
        <AvatarWrapper isUser={isUser}>
          <NameCard.Avatar customer={customer} size={50} />
          {isUser ? <Icon icon="check" /> : <Icon icon="minus" />}
          {this.renderStatus(isUser)}
        </AvatarWrapper>

        <Name>
          {renderFullName(customer)}
          {this.renderPosition()}
          {this.renderLinks(links)}
        </Name>

        <ModalTrigger
          title="Edit basic info"
          trigger={<Icon icon="edit" />}
          size="lg"
          content={props => (
            <CustomerForm {...props} size="lg" customer={customer} />
          )}
        />
      </InfoWrapper>
    );
  }
}

export default InfoSection;
