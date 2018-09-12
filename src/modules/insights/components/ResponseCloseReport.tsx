import * as React from 'react';
import { Chart, TeamMembers } from '.';
import { InsightContent, InsightRow } from '../styles';
import { convertTime } from '../utils';
import CommonReport from './CommonReport';

interface IProps {
  teamMembers: any,
  time: number,
  isLoading: boolean
};

class ResponseCloseReport extends CommonReport<IProps> {
  renderBreadCrumnb() {
    const { __ } = this.context;
    return [
      { title: __('Insights'), link: '/insight' },
      { title: __('Response Close Report') }
    ];
  }

  renderCharts() {
    const { trend, teamMembers, time, isLoading } = this.props;

    return (
      <InsightContent>
        <InsightRow
          innerRef={node => {
            this.wrapper = node;
          }}
        >
          {this.renderTitle(
            'Daily Response Close Resolve Rate',
            convertTime(time)
          )}
          <Chart loading={isLoading} height={300} data={trend} />
        </InsightRow>

        <InsightRow>
          {this.renderTitle(
            'Daily Response Close Resolve Rate by Team Members',
            convertTime(time)
          )}
          <TeamMembers loading={isLoading} datas={teamMembers} />
        </InsightRow>
      </InsightContent>
    );
  }
}

export default ResponseCloseReport;