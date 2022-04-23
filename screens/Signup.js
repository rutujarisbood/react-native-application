import React, { Component, Fragment } from 'react'
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity,ScrollView, StatusBar } from 'react-native'
import { Button, CheckBox } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import ErrorMessage from '../components/ErrorMessage'
import { withFirebaseHOC } from '../config/Firebase'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('Name')
    .required()
    .min(2, 'Must have at least 2 characters'),
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  ContactNumber: Yup.string()
    .label('ContactNumber')
    .required()
    .min(10, 'Contact number should be 10 digits '),
  password: Yup.string()
    .label('Password')
    .required()
    .min(6, 'Password should be at least 6 characters '),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirm Password must matched Password')
    .required('Confirm Password is required'),
  check: Yup.boolean().oneOf([true], 'Please check the agreement')
})


class Signup extends Component {
  state = {
    passwordVisibility: true,
    confirmPasswordVisibility: true,
    passwordIcon: 'ios-eye',
    confirmPasswordIcon: 'ios-eye'
  }

  goToLogin = () => this.props.navigation.navigate('Login')

  handlePasswordVisibility = () => {
    this.setState(prevState => ({
      passwordIcon:
        prevState.passwordIcon === 'ios-eye' ? 'ios-eye-off' : 'ios-eye',
      passwordVisibility: !prevState.passwordVisibility
    }))
  }

  handleConfirmPasswordVisibility = () => {
    this.setState(prevState => ({
      confirmPasswordIcon:
        prevState.confirmPasswordIcon === 'ios-eye' ? 'ios-eye-off' : 'ios-eye',
      confirmPasswordVisibility: !prevState.confirmPasswordVisibility
    }))
  }

  handleOnSignup = async (values, actions) => {
    const { name, email, password } = values

    try {
      const response = await this.props.firebase.signupWithEmail(
        email,
        password,
      )

      if (response.user.uid) {
        const { uid } = response.user
        const cntry=this.state.radioButton;
        //console.log("nameeeeeeeeeeeeeeeeeeeeeeeeeeeeee:",name)
        const userData = { email, name, ContactNumber, uid,cntry  }
        //console.log("asdasdasdasdasdasdasd",userData)
        await this.props.firebase.createNewUser(userData)
        this.props.navigation.navigate('App')
        //const displayName = user.displayName;
      }
    } catch (error) {
      // console.error(error)
      actions.setFieldError('general', error.message)
    } finally {
      actions.setSubmitting(false)
    }
  }
  
  constructor(props){
    super(props);
    this.state = {radioButton:'value1'};
}

  render() {
    const {
      passwordVisibility,
      confirmPasswordVisibility,
      passwordIcon,
      confirmPasswordIcon
    } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            ContactNumber: '',
            password: '',
            confirmPassword: '',
            check: false
          }}
          onSubmit={(values, actions) => {
            this.handleOnSignup(values, actions)
          }}
          validationSchema={validationSchema}>
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            touched,
            handleBlur,
            isSubmitting,
            setFieldValue
          }) => (           
            <Fragment>
              <Text style={{fontWeight:'bold', textShadowColor: '#FFA500', fontSize:30, Color: '#FFA500', margin: 50 }}> Register Here</Text>
              <FormInput
                name='name'
                value={values.name}
                onChangeText={handleChange('name')}
                placeholder='Enter Your Full Name'
                iconName='md-person'
                iconColor='#2C384A'
                onBlur={handleBlur('name')}
              />
              <ErrorMessage errorValue={touched.name && errors.name} />
              <FormInput
                name='email'
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder='Enter Email'
                autoCapitalize='none'
                iconName='ios-mail'
                iconColor='#2C384A'
                onBlur={handleBlur('email')}
              />
              <ErrorMessage errorValue={touched.email && errors.email} />
              <FormInput
                name='ContactNumber'
                value={values.ContactNumber}
                onChangeText={handleChange('ContactNumber')}
                placeholder='Enter Contact Number'
                autoCapitalize='none'
                iconName='ios-mail'
                iconColor='#2C384A'
                onBlur={handleBlur('ContactNumber')}
              />
              <ErrorMessage errorValue={touched.ContactNumber && errors.ContactNumber} />
                            
              <FormInput
                name='password'
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder='Enter Password'
                iconName='ios-lock'
                iconColor='#2C384A'
                onBlur={handleBlur('password')}
                secureTextEntry={true}
                rightIcon={
                  <TouchableOpacity onPress={this.handlePasswordVisibility}>
                    <Ionicons name={passwordIcon} size={28} color='grey' />
                  </TouchableOpacity>
                }
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <FormInput
                name='password'
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                placeholder='Confirm Password'
                iconName='ios-lock'
                iconColor='#2C384A'
                onBlur={handleBlur('confirmPassword')}
                secureTextEntry={true}
                rightIcon={
                  <TouchableOpacity
                    onPress={this.handleConfirmPasswordVisibility}>
                    <Ionicons
                      name={confirmPasswordIcon}
                      size={28}
                      color='grey'
                    />
                  </TouchableOpacity>
                }
              />
              <ErrorMessage
                errorValue={touched.confirmPassword && errors.confirmPassword}
              />
              <View>
            <CheckBox 
                title='USA'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.radioButton === 'USA'}
                onPress={() => this.setState({radioButton: 'USA'})}
                ></CheckBox>
            <CheckBox 
                title='Canada'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.radioButton === 'Canada'}
                onPress={() => this.setState({radioButton: 'Canada'})}
                ></CheckBox> 
            <CheckBox 
                title='Mexico'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.radioButton === 'Mexico'}
                onPress={() => this.setState({radioButton: 'Mexico'})}
                ></CheckBox> 
                </View>
              <CheckBox
                containerStyle={styles.checkBoxContainer}
                checkedIcon='check-box'
                iconType='material'
                uncheckedIcon='check-box-outline-blank'
                title='Agree to terms and conditions'
                checkedTitle='You agreed to our terms and conditions'
                checked={values.check}
                onPress={() => setFieldValue('check', !values.check)}
              />
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType='outline'
                  onPress={handleSubmit}
                  title='SIGNUP'
                  buttonColor='#F57C00'
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </View>
              <ErrorMessage errorValue={errors.general} />
            </Fragment>
          )}
        </Formik>      
        <Button
          title='Have an account? Login'
          onPress={this.goToLogin}
          titleStyle={{
            color: '#039BE5'
          }}
          type='clear'
        />
        </ScrollView> 
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    marginTop: 5
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 15,
    alignItems: 'center'
  },
  buttonContainer: {
    margin: 5
  },
  checkBoxContainer: {
    backgroundColor: '#fff',
    borderColor: '#fff'
  }
})

export default withFirebaseHOC(Signup)