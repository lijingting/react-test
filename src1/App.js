import * as actionCreators from './actionCreators'
 
function mapStateToProps(state) {
  return { todos: state.todos }
}
 
export default connect(mapStateToProps, actionCreators)(MyRootComponent)
