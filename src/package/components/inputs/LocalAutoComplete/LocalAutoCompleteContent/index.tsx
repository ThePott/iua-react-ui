import clsx from "clsx"
import { getRegExp } from "korean-regexp"
import { useEffect, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { RoundBox, Vstack } from "@/package/components/layouts"
import useDetectOutsideClick from "@/package/shared/hooks/useDetectOutsideClick"
import useGlobalStore from "@/package/shared/store/globalStore"
import type { ValueLabel } from "@/package/shared/types"
import Button from "../../Button"
import useLocalAutoCompleteStore from "../useLocalAutoCompleteStore"

type LocalAutoCompleteOptionProps = {
    option: ValueLabel
}
const LocalAutoCompleteOption = ({ option }: LocalAutoCompleteOptionProps) => {
    const setInputValue = useLocalAutoCompleteStore((state) => state.setInputValue)
    const setIsContentOn = useLocalAutoCompleteStore((state) => state.setIsContentOn)
    const handleClick = () => {
        setInputValue(option.label)
        setIsContentOn(false)
    }
    return (
        <Button isOnLeft color="transparent" border="onHover" onClick={handleClick}>
            {option.label}
        </Button>
    )
}

type PortalProps = {
    isEnabled: boolean
    children: ReactNode
}
const Portal = ({ isEnabled, children }: PortalProps) => {
    if (!isEnabled) return children
    return createPortal(children, document.body)
}

const LocalAutoCompleteContent = () => {
    const setIsBodyScrollable = useGlobalStore((state) => state.setIsBodyScrollable)
    const inputRef = useLocalAutoCompleteStore((state) => state.inputRef)
    const inputValue = useLocalAutoCompleteStore((state) => state.inputValue)
    const optionArray = useLocalAutoCompleteStore((state) => state.optionArray)
    const isContentOn = useLocalAutoCompleteStore((state) => state.isContentOn)
    const setIsContentOn = useLocalAutoCompleteStore((state) => state.setIsContentOn)
    const floatingReturns = useLocalAutoCompleteStore((state) => state.floatingReturns)
    const isWidthMatching = useLocalAutoCompleteStore((state) => state.isWidthMatching)

    const { contentRef } = useDetectOutsideClick({
        triggerRef: inputRef,
        isOn: isContentOn,
        onOutsideClick: () => setIsContentOn(false),
    })
    const refCallback = (node: HTMLDivElement | null) => {
        contentRef.current = node
        floatingReturns?.refs.setFloating(node)
    }

    const filteredOptionArray = optionArray.filter(({ label }) => label.match(getRegExp(inputValue)))
    const isVisible = isContentOn && filteredOptionArray.length > 0

    useEffect(() => {
        setIsBodyScrollable(!isVisible)
    }, [isVisible])

    if (!isVisible) return null

    return (
        <Portal isEnabled={!isWidthMatching}>
            <RoundBox
                ref={refCallback}
                style={floatingReturns?.floatingStyles}
                color="bg3"
                padding="md"
                className={clsx("max-h-[200px] overflow-y-auto z-100", isWidthMatching && "w-full")}
                isBordered
            >
                <Vstack gap="none">
                    {filteredOptionArray.map((option) => (
                        <LocalAutoCompleteOption key={option.value} option={option} />
                    ))}
                </Vstack>
            </RoundBox>
        </Portal>
    )
}

export default LocalAutoCompleteContent
