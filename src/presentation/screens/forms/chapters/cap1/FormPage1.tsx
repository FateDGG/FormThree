import React, { useContext } from 'react'
import { Alert, Button, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { globalStyles } from '../../../../theme/theme'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { InputComponent } from '../../../../components/shared/InputComponent';
import { NumericInputComponent } from '../../../../components/shared/NumericInputComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { useNavigation } from '@react-navigation/native'
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { validationSchemaPage1 } from '../../../../../utils/cap1/validationSchemas';
import { fileName } from '../../../../../utils/generateFilename';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { getInitialValuesPage1 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { EmailInputComponent } from '../../../../components/shared/EmailInputComponent';
getInitialValuesPage1


export interface FormValues1 {
  P1: FormTemplate;
  P2: FormTemplate;
  P3: FormTemplate;
  P4: FormTemplate;
  P5: FormTemplate;
  P6: FormTemplate;
}

export const FormPage1 = () => {

  const navigation = useNavigation();
  const {saveAllData} = UseSaveData();
  const { surveyId } = useContext(SurveyContext);
  const finalSurveyId = surveyId ?? "defaultSurveyId";
  const initialValues:FormValues1 = getInitialValuesPage1()
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
        <View style={globalStyles.CapTitle}>
          <Text style={globalStyles.Title}>Capítulo 1.  Características sociodemográficas del encuestado</Text>
        </View>
        <View>
          <Text style={{ color: '#f89d30', fontWeight: 'bold' }}>El objetivo de este capítulo es obtener información sobre los aspectos sociodemográficos del actor / operador de justicia.</Text>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaPage1}
          onSubmit={ async(
            values: FormValues1,
            {setSubmitting} : FormikHelpers<FormValues1>
          ) => {
            try{
              await saveAllData(`${fileName}.json`,values,finalSurveyId);
            }
            finally{
              setSubmitting(false);
              navigation.navigate('page2' as never)
            }
          }
          }>
          {({handleChange, handleBlur,handleSubmit,values, errors, touched, setFieldValue, setFieldTouched}) =>(
              <View >
                <InputComponent
                  info='P1' 
                  textTitle='P1. Nombre completo del encuestado:'
                  handleChange={(value: string) => setFieldValue('P1.response[0].responseuser[0]', value)}
                  handleBlur={() => setFieldTouched('P1.response[0].responseuser[0]')}
                  values={values.P1.response[0].responseuser} 
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P1" />
                <InputComponent
                  info='P2'
                  textTitle='P2. Nombre del Establecimiento Educativo del cual es funcionario:'
                  handleChange={(value: string) => setFieldValue('P2.response[0].responseuser[0]', value)}
                  handleBlur={() => setFieldTouched('P2.response[0].responseuser[0]')}
                  values={values.P2.response[0].responseuser}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P2" />
                <NumericInputComponent
                  info='P3'
                  textTitle='P3. Número de celular:'
                  handleChange={(value: string) => setFieldValue('P3.response[0].responseuser[0]', value)}
                  handleBlur={() => setFieldTouched('P3.response[0].responseuser[0]')}
                  values={values.P3.response[0].responseuser}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P3" />
                <EmailInputComponent
                  info='P4'
                  textTitle='P4. Correo electrónico:'
                  handleChange={(value: string) => setFieldValue('P4.response[0].responseuser[0]', value)}
                  handleBlur={() => setFieldTouched('P4.response[0].responseuser[0]')}
                  values={values.P4.response[0].responseuser}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P4" />
                <InputComponent
                  info='P5'
                  textTitle='P5. Nombre del departamento:'
                  handleChange={(value: string) => setFieldValue('P5.response[0].responseuser[0]', value)}
                  handleBlur={() => setFieldTouched('P5.response[0].responseuser[0]')}
                  values={values.P5.response[0].responseuser}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P5" />
                <NumericInputComponent
                  info='P6'
                  textTitle='P6. Código departamento:'
                  handleChange={(value: string) => setFieldValue('P6.response[0].responseuser[0]', value)}
                  handleBlur={() => setFieldTouched('P6.response[0].responseuser[0]')}
                  values={values.P6.response[0].responseuser}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P6" />
                <View style={globalStyles.buttonsBanner}>
                  <NextComponent onNextPress={handleSubmit} />
                </View>
              </View>
            )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
