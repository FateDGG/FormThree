import React, { useContext } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { DoubleDropdownInput } from '../../../../components/shared/DropDownInputComponent';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native';
import { InputComponent } from '../../../../components/shared/InputComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { getInitialValuesPage2 } from '../../../../../utils/initialValues';
import { categories } from '../../../../../utils/cap1/categoriesPage2';
import { fileName } from '../../../../../utils/generateFilename';
import { validationSchemaPage2 } from '../../../../../utils/cap1/validationSchemas';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { ErrorIdMessage } from '../../../../components/shared/ErrorIdComponent';
import { NumericInputComponent } from '../../../../components/shared/NumericInputComponent';

export interface FormValues {
  P7: FormTemplate;
  P8: FormTemplate;
  P9: FormTemplate;
  P10: FormTemplate;
  P11: FormTemplate;
  P12: FormTemplate;
}

export const FormPage2 = () => {
  const { surveyId } = useContext(SurveyContext);
  const { saveAllData } = UseSaveData();
  const finalSurveyId = surveyId ?? "defaultSurveyId";
  const navigation = useNavigation();
  const initialValues: FormValues = getInitialValuesPage2();

  console.log('Initial values:', initialValues); // Log de los valores iniciales

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaPage2}
          onSubmit={async (
            values: FormValues,
            { setSubmitting }: FormikHelpers<FormValues>
          ) => {
            console.log('Submitting values:', values); // Log de los valores que intentas enviar
            try {
              await saveAllData(`${fileName}.json`, values, finalSurveyId);
              console.log('Data saved successfully'); // Confirmación de que los datos se guardaron
              navigation.navigate('page3' as never); // Asegúrate de que la navegación esté correcta
            } catch (error) {
              console.error('Error saving data:', error); // Log de cualquier error que ocurra
            } finally {
              setSubmitting(false); // Asegúrate de siempre detener el estado de submit
            }
          }}
        >
          {({ handleSubmit, setFieldValue, values, setFieldTouched, errors, touched }) => {
            console.log('Current form values:', values); // Log de los valores actuales del formulario
            console.log('Current errors:', errors); // Log de los errores actuales del formulario
            
            return (
              <View>
                <InputComponent
                  info='P7'
                  textTitle='P7.Nombre municipio:'
                  handleChange={(value: string) => {
                    console.log('P7 changed to:', value); // Log del cambio en P7
                    setFieldValue('P7.response[0].responseuser[0]', value);
                  }}
                  handleBlur={() => {
                    console.log('P7 blurred'); // Log cuando P7 pierde el foco
                    setFieldTouched('P7.response[0].responseuser[0]');
                  }}
                  values={values.P7.response[0].responseuser}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P7" />

                <NumericInputComponent
                  info='P8'
                  textTitle='P8. Código municipio:'
                  handleChange={(value: string) => {
                    console.log('P8 changed to:', value); // Log del cambio en P8
                    setFieldValue('P8.response[0].responseuser[0]', value);
                  }}
                  handleBlur={() => {
                    console.log('P8 blurred'); // Log cuando P8 pierde el foco
                    setFieldTouched('P8.response[0].responseuser[0]');
                  }}
                  values={values.P8.response[0].responseuser}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P8" />

                <DropDownComponent
                  values={values.P9.response[0].responseuser}
                  setFieldValue={(value) => {
                    console.log('P9 changed to:', value); // Log del cambio en P11
                    setFieldValue('P9.response[0].responseuser[0]', value);
                  }}
                  qTitle='P9. ¿Qué rol desempeña usted dentro del establecimiento educativo?'
                  opValues={['Rector', 'Coordinador o líder de convivencia escolar']}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P9" />


                <DropDownComponent
                  values={values.P10.response[0].responseuser}
                  setFieldValue={(value) => {
                    console.log('P10 changed to:', value); // Log del cambio en P10
                    setFieldValue('P10.response[0].responseuser[0]', value);
                  }}
                  qTitle='P10. ¿Nos autoriza a realizarle esta encuesta?'
                  opValues={['Si', 'No']}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P10" />

                <DropDownComponent
                  values={values.P11.response[0].responseuser}
                  setFieldValue={(value) => {
                    console.log('P11 changed to:', value); // Log del cambio en P11
                    setFieldValue('P11.response[0].responseuser[0]', value);
                  }}
                  qTitle='P11. ¿Cuántas sedes tiene el Establecimiento Educativo en el que usted trabaja? '
                  opValues={['1', '2', '3', 'Más de 3']}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P11" />
                
                <DropDownComponent
                  values={values.P12.response[0].responseuser}
                  setFieldValue={(value) => {
                    console.log('P12 changed to:', value); // Log del cambio en P12
                    setFieldValue('P12.response[0].responseuser[0]', value);
                  }}
                  qTitle='P12. ¿Cual es su edad?'
                  opValues={['Entre 18 a 25 años', 'Entre 26 a 35 años', 'Entre 36 a 45 años', 'Entre 46 a 55 años', 'Mayor de 56 años ']}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P12" />

                <View style={globalStyles.buttonsBanner}>
                  <Prevcomponent onPrevPressed={() => {
                    console.log('Navigating to page1'); // Log al navegar a la página anterior
                    navigation.navigate('page1' as never);
                  }} />
                  <NextComponent onNextPress={() => {
                    console.log('Navigating to page3'); // Log al intentar navegar a la siguiente página
                    handleSubmit();
                  }} />
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
