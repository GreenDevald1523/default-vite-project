import { Center, Heading, Text, Stack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Page404 = () => {
    return (
        <Center h="100vh">
            <Stack textAlign="center">
                <Heading>404</Heading>
                <Text>Страница не найдена</Text>
                <Button as={Link} to="/" colorScheme="gray">
                    Перейти на страницу Home
                </Button>
            </Stack>
        </Center>
    )
}
