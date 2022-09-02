import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Container,
  Form,
  FormGroup,
  Input,
	Label,
	Table,
  Button
} from 'reactstrap';

const TableElem = ({
  data
}) => {
  return (
    <div>
      <Table responsive>
				<thead>
					{data.columns.map((column, index) =>(
						<td key={index}>{column}</td>
					))}
				</thead>
				
      </Table>
    </div>
  );
}

export default TableElem;