import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Container} from 'mdbreact';
import PersonalDetails from './personal-details';
import AcademicDetails from './academic-details';
import CertificationDetails from './certification-details';
import Skills from './skills';
import Experience from './experience';

  const styles = theme => ({
    root: {
      width: '100%',
      paddingTop: '3%',
    },
    button: {
      marginTop: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    actionsContainer: {
      marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
      padding: theme.spacing.unit * 3,
    },
  });

  function getSteps() {
    return ['Personal Details', 'Academic Details', 'Certification Deatils', 'Skills', 'Experience'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalDetails />;
      case 1:
        return <AcademicDetails />;
      case 2:
        return <CertificationDetails />;
      case 3:
        return <Skills />;
      case 4:
        return <Experience />;
      default:
        return 'Unknown step';
    }
  }

  class UseProfile extends Component {
    constructor(props) {
      super(props);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    this.state = {
      activeStep: 0,
    };
    }

    handleNext = () => {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
    };

    handleBack = () => {
      this.setState(state => ({
        activeStep: state.activeStep - 1,
      }));
    };

    handleReset = () => {
      this.setState({
        activeStep: 0,
      });
    };

    render() {
      const { classes } = this.props;
      const steps = getSteps();
      const { activeStep } = this.state;

      return (
        <div style={{ padding: '4%', background: 'linear-gradient(to bottom, white, #D3D3D3)', paddingTop: '10%'}}>
          <Container>
            <div className={classes.root}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => {
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                          <div style={{float: 'right'}}>
                            <Button
                              disabled={activeStep === 0}
                              onClick={this.handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                            <Button
                              variant="contained"
                              color= "primary"
                              onClick={this.handleNext}
                              className={classes.button}
                            >
                              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                          </div>
                        </div>
                      </StepContent>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                  <Typography>All steps completed - Profile Updates done..</Typography>
                  <Button onClick={this.handleReset} className={classes.button}>
                    Reset
                  </Button>
                </Paper>
              )}
            </div>
          </Container>
        </div>
      );
    }
  }

  UseProfile.propTypes = {
    classes: PropTypes.object,
  };

export default withStyles(styles)(UseProfile);
