import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'modules/layout/components';
import { ModalTrigger, EmptyState, Icon } from 'modules/common/components';
import { Deal } from '../../containers';
import { DealAddForm } from '../';
import { SectionContainer } from '../../styles/deal';

const propTypes = {
  deals: PropTypes.array.isRequired,
  customerId: PropTypes.string,
  companyId: PropTypes.string,
  saveDeal: PropTypes.func,
  removeDeal: PropTypes.func
};

class DealSection extends React.Component {
  render() {
    const { Section } = Sidebar;
    const { Title, QuickButtons } = Sidebar.Section;
    const { saveDeal, removeDeal, customerId, companyId, deals } = this.props;
    const { __ } = this.context;

    const trigger = (
      <a>
        <Icon icon="add" />
      </a>
    );

    return (
      <Section>
        <Title>{__('Deals')}</Title>

        <QuickButtons>
          <ModalTrigger title="Add a deal" trigger={trigger}>
            <DealAddForm
              saveDeal={saveDeal}
              customerId={customerId}
              companyId={companyId}
              showSelect
            />
          </ModalTrigger>
        </QuickButtons>

        <SectionContainer>
          {deals.map((deal, index) => (
            <Deal
              key={index}
              dealId={deal._id}
              saveDeal={saveDeal}
              removeDeal={removeDeal}
            />
          ))}

          {deals.length === 0 && (
            <EmptyState icon="piggy-bank" text="No deal" />
          )}
        </SectionContainer>
      </Section>
    );
  }
}

DealSection.propTypes = propTypes;
DealSection.contextTypes = {
  __: PropTypes.func
};

export default DealSection;