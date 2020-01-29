import React, { Component } from 'react'
import ReactTable from 'react-table';

class LeaveList extends Component {
    render() {
        const columns = [
          {
            Header: "Faculty/Staff Name",
            accessor: "rankRuleId",
            filterable: true,
            sortable: true,
            width: 70
          },

          {
            Header: "Rank",
            accessor: "rank", // String-based value accessors!
            filterable: true,
            sortable: true,
            width: 50
          },
          {
            Header: "rankDescription",
            accessor: "rankDescription", // String-based value accessors!
            width: 130,
            filterable: true,
            maxWidth: 200,
            minWidth: 100
          },
          {
            Header: "rules",
            accessor: "rules", // String-based value accessors!
            filterable: true
          },
          {
            Header: "State",
            accessor: "state",
            filterable: true,
            width: 100,
            maxWidth: 100,
            minWidth: 100
          },
          {
            Header: "priority",
            accessor: "priority",
            filterable: true,
            width: 70
          },
          {
            Header: "skipOtherRule",
            accessor: "skipOtherRule", // String-based value accessors!
            filterable: true,
            width: 100,
            maxWidth: 100,
            minWidth: 100
          },
          
          {
            Header: "isCampaign",
            accessor: "isCampaign",
            filterable: true,
            width: 100,
            maxWidth: 100,
            minWidth: 100
          },
          {
            Header: "isActive",
            accessor: "isActive",
            filterable: true,
            width: 50
          },
          {
            Header: "createdAt",
            accessor: "createdAt",
            filterable: true,
            width: 100,
            maxWidth: 100,
            minWidth: 100
          },
          {
            Header: "updatedAt",
            accessor: "updatedAt",
            filterable: true,
            width: 100,
            maxWidth: 100,
            minWidth: 100
          }
          
        ];
        return (
          <div>
            <div className="animated fadeIn">
              <div className="card">
                <div className="card-header">
                  <i className="fa fa-tint" aria-hidden="true" />
                  Leave List
                </div>
                <div className="card-body">
                  <ReactTable
                    // data={rankRulesCCListId.response.rankRules}

                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default LeaveList;