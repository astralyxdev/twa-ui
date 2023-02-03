import React, { FC } from "react";
import {
  Avatar,
  BlockHeader,
  Button,
  Cell,
  Group,
  Panel,
  Separator,
  Switch,
} from "..";

export const App: FC = () => {
  return (
    <Panel>
      <Group space={16}>
        <Group space={0}>
          <BlockHeader>ADVANCED</BlockHeader>
          <Cell after={<Switch checked />} multiPosition="start">
            Show Calls Tab
          </Cell>
          <Separator />
          <Cell after={<Switch />} multiPosition="end">
            Show Calls Tab
          </Cell>
        </Group>
        <Group space={0}>
          <BlockHeader after="ADVANCED">ADVANCED</BlockHeader>
          <Cell
            indicator={"Alt + Z"}
            withMouse
            after={
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="white"
                  stroke-opacity="0.1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            Show Calls Tab
          </Cell>
        </Group>
        <Group space={0}>
          <BlockHeader>ADVANCED</BlockHeader>
          <Cell after={<Switch checked />}>Show Calls Tab</Cell>
        </Group>
        <Group space={0}>
          <BlockHeader after="ADVANCED">ADVANCED</BlockHeader>
          <Cell
            withMouse
            multiPosition="start"
            afterIcon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#6DDBB8" />
                <path
                  d="M14 7L9 13L6 10"
                  stroke="#222431"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            Show Calls Tab
          </Cell>
          <Separator />
          <Cell withMouse multiPosition="end">
            Show Calls Tab
          </Cell>
        </Group>
        <Group space={0}>
          <BlockHeader>ADVANCED</BlockHeader>
          <Cell after={"Alt + Z"}>Show Calls Tab</Cell>
        </Group>
        <Group space={0}>
          <BlockHeader after="ADVANCED">ADVANCED</BlockHeader>
          <Cell
            withMouse
            multiPosition="start"
            afterIcon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#6DDBB8" />
                <path
                  d="M14 7L9 13L6 10"
                  stroke="#222431"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            Show Calls Tab
          </Cell>
          <Separator />
          <Cell withMouse multiPosition="center">
            Show Calls Tab
          </Cell>
          <Separator />
          <Cell
            withMouse
            multiPosition="end"
            before={
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4879 3.88467L10.5121 0.408239C9.57639 -0.13608 8.42361 -0.13608 7.48794 0.408239L1.51206 3.88467C0.576395 4.42899 0 5.43493 0 6.52357V13.4764C0 14.5651 0.576395 15.571 1.51206 16.1153L7.48794 19.5918C8.4236 20.1361 9.57639 20.1361 10.5121 19.5918L16.4879 16.1153C17.4236 15.571 18 14.5651 18 13.4764V6.52357C18 5.43493 17.4236 4.42899 16.4879 3.88467ZM8.49598 2.16751C8.80787 1.98607 9.19213 1.98607 9.50402 2.16751L15.4799 5.64394C15.7918 5.82538 15.9839 6.16069 15.9839 6.52357V13.4764C15.9839 13.8393 15.7918 14.1746 15.4799 14.3561L9.50402 17.8325C9.19213 18.0139 8.80787 18.0139 8.49598 17.8325L2.5201 14.3561C2.20821 14.1746 2.01608 13.8393 2.01608 13.4764V6.52357C2.01608 6.16069 2.20821 5.82538 2.5201 5.64394L8.49598 2.16751ZM12.3346 8.567C12.6626 8.11374 12.5639 7.47837 12.114 7.14787C11.6642 6.81737 11.0336 6.91688 10.7056 7.37014L8.54699 10.353L7.77427 9.36954C7.42871 8.92972 6.79472 8.85544 6.35822 9.20363C5.92172 9.55183 5.848 10.1906 6.19357 10.6305L7.78963 12.6619C7.98518 12.9108 8.28496 13.0532 8.59994 13.0469C8.91492 13.0407 9.20887 12.8863 9.39449 12.6299L12.3346 8.567Z"
                  fill="#6DDBB8"
                />
              </svg>
            }
            mode="accent"
          >
            Show Calls Tab
          </Cell>
        </Group>
        <Group space={0}>
          <BlockHeader>ADVANCED</BlockHeader>
          <Cell
            after={"Alt + Z"}
            before={
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4879 3.88467L10.5121 0.408239C9.57639 -0.13608 8.4236 -0.13608 7.48794 0.408239L1.51206 3.88467C0.576395 4.42899 0 5.43493 0 6.52357V13.4764C0 14.5651 0.576394 15.571 1.51206 16.1153L7.48794 19.5918C8.4236 20.1361 9.57639 20.1361 10.5121 19.5918L16.4879 16.1153C17.4236 15.571 18 14.5651 18 13.4764V6.52357C18 5.43493 17.4236 4.42899 16.4879 3.88467ZM8.49598 2.16751C8.80787 1.98607 9.19213 1.98607 9.50402 2.16751L15.4799 5.64394C15.7918 5.82538 15.9839 6.16069 15.9839 6.52357V13.4764C15.9839 13.8393 15.7918 14.1746 15.4799 14.3561L9.50402 17.8325C9.19213 18.0139 8.80787 18.0139 8.49598 17.8325L2.5201 14.3561C2.20821 14.1746 2.01608 13.8393 2.01608 13.4764V6.52357C2.01608 6.16069 2.20821 5.82538 2.5201 5.64394L8.49598 2.16751ZM12.3346 8.567C12.6626 8.11374 12.5639 7.47837 12.114 7.14787C11.6642 6.81737 11.0336 6.91688 10.7056 7.37014L8.54699 10.353L7.77427 9.36954C7.42871 8.92972 6.79472 8.85544 6.35822 9.20363C5.92172 9.55183 5.848 10.1906 6.19357 10.6305L7.78963 12.6619C7.98518 12.9108 8.28496 13.0532 8.59994 13.0469C8.91492 13.0407 9.20887 12.8863 9.39449 12.6299L12.3346 8.567Z"
                  fill="#6DDBB8"
                />
              </svg>
            }
          >
            Show Calls Tab
          </Cell>
        </Group>
        <Cell
          withMouse
          before={<Avatar size={42} />}
          description="@crypt_nick"
          after={
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="white"
                stroke-opacity="0.1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          Nick
        </Cell>
        <Group space={0}>
          <BlockHeader>ADVANCED</BlockHeader>
          <Cell
            after={"Alt + Z"}
            beforeIcon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="5" fill="#4066EF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.992 5.71927L11.008 3.28577C10.3843 2.90474 9.61574 2.90474 8.99196 3.28577L5.00804 5.71927C4.38426 6.10029 4 6.80445 4 7.5665V12.4335C4 13.1955 4.38426 13.8997 5.00804 14.2807L8.99196 16.7142C9.61574 17.0953 10.3843 17.0953 11.008 16.7142L14.992 14.2807C15.6157 13.8997 16 13.1955 16 12.4335V7.5665C16 6.80445 15.6157 6.10029 14.992 5.71927ZM9.66399 4.51725C9.87191 4.39025 10.1281 4.39025 10.336 4.51725L14.3199 6.95076C14.5279 7.07776 14.6559 7.31248 14.6559 7.5665V12.4335C14.6559 12.6875 14.5279 12.9222 14.3199 13.0492L10.336 15.4827C10.1281 15.6098 9.87191 15.6098 9.66399 15.4827L5.68007 13.0492C5.47214 12.9222 5.34406 12.6875 5.34406 12.4335V7.5665C5.34406 7.31248 5.47214 7.07776 5.68007 6.95076L9.66399 4.51725ZM12.2231 8.9969C12.4417 8.67962 12.3759 8.23486 12.076 8.00351C11.7761 7.77216 11.3557 7.84182 11.1371 8.1591L9.698 10.2471L9.18285 9.55868C8.95247 9.25081 8.52981 9.19881 8.23881 9.44254C7.94782 9.68628 7.89867 10.1334 8.12904 10.4413L9.19309 11.8633C9.32345 12.0375 9.52331 12.1373 9.7333 12.1329C9.94328 12.1285 10.1392 12.0204 10.263 11.8409L12.2231 8.9969Z"
                  fill="white"
                />
              </svg>
            }
          >
            Show Calls Tab
          </Cell>
          <BlockHeader>Some subtitle text, using title component</BlockHeader>
        </Group>
        <Group space={0}>
          <BlockHeader>ADVANCED</BlockHeader>
          <Cell
            indicator={"Alt + Z"}
            after={
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="white"
                  stroke-opacity="0.1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            beforeIcon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="5" fill="#4066EF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.992 5.71927L11.008 3.28577C10.3843 2.90474 9.61574 2.90474 8.99196 3.28577L5.00804 5.71927C4.38426 6.10029 4 6.80445 4 7.5665V12.4335C4 13.1955 4.38426 13.8997 5.00804 14.2807L8.99196 16.7142C9.61574 17.0953 10.3843 17.0953 11.008 16.7142L14.992 14.2807C15.6157 13.8997 16 13.1955 16 12.4335V7.5665C16 6.80445 15.6157 6.10029 14.992 5.71927ZM9.66399 4.51725C9.87191 4.39025 10.1281 4.39025 10.336 4.51725L14.3199 6.95076C14.5279 7.07776 14.6559 7.31248 14.6559 7.5665V12.4335C14.6559 12.6875 14.5279 12.9222 14.3199 13.0492L10.336 15.4827C10.1281 15.6098 9.87191 15.6098 9.66399 15.4827L5.68007 13.0492C5.47214 12.9222 5.34406 12.6875 5.34406 12.4335V7.5665C5.34406 7.31248 5.47214 7.07776 5.68007 6.95076L9.66399 4.51725ZM12.2231 8.9969C12.4417 8.67962 12.3759 8.23486 12.076 8.00351C11.7761 7.77216 11.3557 7.84182 11.1371 8.1591L9.698 10.2471L9.18285 9.55868C8.95247 9.25081 8.52981 9.19881 8.23881 9.44254C7.94782 9.68628 7.89867 10.1334 8.12904 10.4413L9.19309 11.8633C9.32345 12.0375 9.52331 12.1373 9.7333 12.1329C9.94328 12.1285 10.1392 12.0204 10.263 11.8409L12.2231 8.9969Z"
                  fill="white"
                />
              </svg>
            }
            multiPosition="start"
            withMouse
          >
            Show Calls Tab
          </Cell>
          <Separator />
          <Cell
            indicator={"Alt + Z"}
            after={
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="white"
                  stroke-opacity="0.1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            beforeIcon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="5" fill="#4066EF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.992 5.71927L11.008 3.28577C10.3843 2.90474 9.61574 2.90474 8.99196 3.28577L5.00804 5.71927C4.38426 6.10029 4 6.80445 4 7.5665V12.4335C4 13.1955 4.38426 13.8997 5.00804 14.2807L8.99196 16.7142C9.61574 17.0953 10.3843 17.0953 11.008 16.7142L14.992 14.2807C15.6157 13.8997 16 13.1955 16 12.4335V7.5665C16 6.80445 15.6157 6.10029 14.992 5.71927ZM9.66399 4.51725C9.87191 4.39025 10.1281 4.39025 10.336 4.51725L14.3199 6.95076C14.5279 7.07776 14.6559 7.31248 14.6559 7.5665V12.4335C14.6559 12.6875 14.5279 12.9222 14.3199 13.0492L10.336 15.4827C10.1281 15.6098 9.87191 15.6098 9.66399 15.4827L5.68007 13.0492C5.47214 12.9222 5.34406 12.6875 5.34406 12.4335V7.5665C5.34406 7.31248 5.47214 7.07776 5.68007 6.95076L9.66399 4.51725ZM12.2231 8.9969C12.4417 8.67962 12.3759 8.23486 12.076 8.00351C11.7761 7.77216 11.3557 7.84182 11.1371 8.1591L9.698 10.2471L9.18285 9.55868C8.95247 9.25081 8.52981 9.19881 8.23881 9.44254C7.94782 9.68628 7.89867 10.1334 8.12904 10.4413L9.19309 11.8633C9.32345 12.0375 9.52331 12.1373 9.7333 12.1329C9.94328 12.1285 10.1392 12.0204 10.263 11.8409L12.2231 8.9969Z"
                  fill="white"
                />
              </svg>
            }
            multiPosition="end"
            withMouse
          >
            Show Calls Tab
          </Cell>
        </Group>
        <Group space={8}>
          <Button>Save information</Button>
          <Button disabled>Clear data</Button>
        </Group>
        <Button
          mode="secondary"
          before={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="5" fill="#EF4040" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.992 5.71927L11.008 3.28577C10.3843 2.90474 9.61574 2.90474 8.99196 3.28577L5.00804 5.71927C4.38426 6.10029 4 6.80445 4 7.5665V12.4335C4 13.1955 4.38426 13.8997 5.00804 14.2807L8.99196 16.7142C9.61574 17.0953 10.3843 17.0953 11.008 16.7142L14.992 14.2807C15.6157 13.8997 16 13.1955 16 12.4335V7.5665C16 6.80445 15.6157 6.10029 14.992 5.71927ZM9.66399 4.51725C9.87191 4.39025 10.1281 4.39025 10.336 4.51725L14.3199 6.95076C14.5279 7.07776 14.6559 7.31248 14.6559 7.5665V12.4335C14.6559 12.6875 14.5279 12.9222 14.3199 13.0492L10.336 15.4827C10.1281 15.6098 9.87191 15.6098 9.66399 15.4827L5.68007 13.0492C5.47214 12.9222 5.34406 12.6875 5.34406 12.4335V7.5665C5.34406 7.31248 5.47214 7.07776 5.68007 6.95076L9.66399 4.51725ZM12.2231 8.9969C12.4417 8.67962 12.3759 8.23486 12.076 8.00351C11.7761 7.77216 11.3557 7.84182 11.1371 8.1591L9.698 10.2471L9.18285 9.55868C8.95247 9.25081 8.52981 9.19881 8.23881 9.44254C7.94782 9.68628 7.89867 10.1334 8.12904 10.4413L9.19309 11.8633C9.32345 12.0375 9.52331 12.1373 9.7333 12.1329C9.94328 12.1285 10.1392 12.0204 10.263 11.8409L12.2231 8.9969Z"
                fill="white"
              />
            </svg>
          }
        >
          Delete account
        </Button>
      </Group>
    </Panel>
  );
};
