'use client';

import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useMockedUser } from 'src/hooks/use-mocked-user';

import { _appInvoices } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';

import AppNewInvoice from '../app-new-invoice';
import AppAreaInstalled from '../app-area-installed';
import AppWidgetSummary from '../app-widget-summary';
import AppCurrentDownload from '../app-current-download';

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Horas Compensadas"
            percent={2.6}
            total={284}
            chart={{
              series: [30, 47, 78, 121, 168],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total de Contratações"
            percent={0.2}
            total={486}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Solicitação de EPIs"
            percent={-0.5}
            total={793}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [80, 90, 310, 80, 160, 370, 840, 330, 460, 943],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentDownload
            title="Demanda de Pessoal"
            chart={{
              series: [
                { label: 'Matipó', value: 140 },
                { label: 'Frutal', value: 345 },
                { label: 'Carangola', value: 113 },
                { label: 'Lajinha', value: 543 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppAreaInstalled
            title="Horas Extras VS Horas Negativas"
            subheader="(+43%) Maior que no último ano"
            chart={{
              categories: [
                'Jan',
                'Fev',
                'Mar',
                'Abr',
                'Mai',
                'Jun',
                'Jul',
                'Ago',
                'Set',
                'Out',
                'Nov',
                'Dez',
              ],
              series: [
                {
                  year: '2023',
                  data: [
                    {
                      name: 'Horas Negativas',
                      data: [100, 410, 350, 510, 490, 620, 690, 910, 1480, 350, 510, 490],
                    },
                    {
                      name: 'Horas Extras',
                      data: [100, 340, 130, 560, 770, 880, 990, 770, 450, 130, 560, 770],
                    },
                  ],
                },
                {
                  year: '2024',
                  data: [
                    {
                      name: 'Horas Negativas',
                      data: [510, 350, 410, 100, 910, 690, 620, 1480, 910, 690, 620, 490],
                    },
                    {
                      name: 'Horas Extras',
                      data: [560, 130, 340, 100, 770, 990, 880, 450, 770, 990, 880, 770],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} lg={12}>
          <AppNewInvoice
            title="Novos Contratos"
            tableData={_appInvoices}
            tableLabels={[
              { id: 'cidade', label: 'Cidade' },
              { id: 'category', label: 'Categoria' },
              { id: 'tipo', label: 'tipo' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopRelated title="Top Related Applications" list={_appRelated} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTopInstalledCountries title="Top Installed Countries" list={_appInstalled} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTopAuthors title="Top Authors" list={_appAuthors} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <Stack spacing={3}>
            <AppWidget
              title="Conversion"
              total={38566}
              icon="solar:user-rounded-bold"
              chart={{
                series: 48,
              }}
            />

            <AppWidget
              title="Applications"
              total={55566}
              icon="fluent:mail-24-filled"
              color="info"
              chart={{
                series: 75,
              }}
            /> */}
        {/* </Stack>
        </Grid> */}
      </Grid>
    </Container>
  );
}
