import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Boards extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.content_id}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.created_at}</TableCell>
                <TableCell>{this.props.user_name}</TableCell>
            </TableRow>
        )
    }
}

export default Boards;