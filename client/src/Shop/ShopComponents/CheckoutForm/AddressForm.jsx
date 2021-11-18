import React, {useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import CustomTextField from './CustomTextField'

import { commerce } from '../../lib/commerce'

const AddressForm = ({ checkoutToken }) => {

  const methods = useForm();

  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingDivisions, setShippingDivisions] = useState([])
  const [shippingDivision, setShippingDivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
    console.log(countries)
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [])

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
          <form onSubmit=''>
            <Grid container spacing={3}>
              <CustomTextField required name='firstName' label='First Name' />
              <CustomTextField required name='lastName' label='Last Name' />
              <CustomTextField required name='address1' label='Address' />
              <CustomTextField required name='email' label='Email' />
              <CustomTextField required name='City' label='City' />
              <CustomTextField required name='Zip' label='Zip / Postal Code' />
            
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (   
                <MenuItem key={country.id} value={country.id}>
                  {country.label}
                </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={ } fullWidth onChange={ }>
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={ } fullWidth onChange={ }>
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid> */}
            
            </Grid>
          </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
